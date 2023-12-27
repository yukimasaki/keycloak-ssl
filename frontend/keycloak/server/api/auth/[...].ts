import { NuxtAuthHandler } from '#auth';
import { Account, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { Provider } from 'next-auth/providers';

const runtimeConfig = useRuntimeConfig();

const keycloakCustomProvider: Provider = {
  id: "keycloak",
  name: "Keycloak",
  wellKnown: `${runtimeConfig.public.issuer}/.well-known/openid-configuration`,
  type: "oauth",
  authorization: {
    params: {
      scope: "openid email profile"
    }
  },
  checks: ["pkce", "state"],
  idToken: true,
  clientId: runtimeConfig.public.clientId,
  clientSecret: runtimeConfig.public.clientSecret,
  profile(profile) {
    return {
      ...profile,
      id: profile.sub,
    }
  },
}

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  try {
    if (Date.now() > token.refreshTokenExpired) throw Error;
    const details = {
      client_id: runtimeConfig.public.clientId,
      client_secret: runtimeConfig.public.clientSecret,
      grant_type: ['refresh_token'],
      refresh_token: token.refreshToken,
    };
    const formBody: string[] = [];
    Object.entries(details).forEach(([key, value]: [string, any]) => {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(value);
      formBody.push(encodedKey + '=' + encodedValue);
    });
    const formData = formBody.join('&');
    const url = `${runtimeConfig.public.issuer}/protocol/openid-connect/token`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formData,
    });
    const refreshedTokens = await response.json();
    if (!response.ok) throw refreshedTokens;
    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpired: Date.now() + (refreshedTokens.expires_in - 15) * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
      refreshTokenExpired:
        Date.now() + (refreshedTokens.refresh_expires_in - 15) * 1000,
    };
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export default NuxtAuthHandler({
  secret: runtimeConfig.public.authSecret,
  providers: [
    keycloakCustomProvider,
  ],
  callbacks: {
    async session({ session, token }: {
      session: Session,
      token: JWT,
    }) {
      if (token) {
        session.user = token.user;
        session.error = token.error;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
    async jwt({ token, user, account }: {
      token: JWT,
      user: User,
      account: Account | null,
    }) {
      // Initial sign in
      if (account && user) {
        console.log(account);
        /** issue: トークン取得に時間がかかる
         * 下記をコメントアウトするとレスポンスが遅い現象が解消する
         *  - token.idToken = account.id_token;
         *  - token.accessToken = account.access_token;
         *  - token.refreshToken = account.refresh_token;
         *  適当な文字列を代入すると解消することから、デコードに時間がかかっている？
         *  余談：KeycloakProviderを使えば解消するかもしれないが`not a function`エラーが出る
         */
        // token.idToken = `eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoYWg4STkxUWlBRURqbGNhd1J2eVQ0bHY0SEx2eFRvVzFZdTVNU0tOcjJZIn0.eyJleHAiOjE3MDM2NjY4NzgsImlhdCI6MTcwMzY2NjU3OCwiYXV0aF90aW1lIjoxNzAzNjY2NTc4LCJqdGkiOiJmMzQ5Y2UwMi05ZjcwLTRiODAtYjZiNC1hNTllNTY0YjYxMmEiLCJpc3MiOiJodHRwczovL2F1dGgueW91bWFyby5qcC9yZWFsbXMvc2FtcGxlIiwiYXVkIjoibnV4dC1zYW1wbGUiLCJzdWIiOiJiM2Q3YTliYy1iZjIxLTQ5ZDMtYTdmOC1iMTViODVkNjllYTQiLCJ0eXAiOiJJRCIsImF6cCI6Im51eHQtc2FtcGxlIiwic2Vzc2lvbl9zdGF0ZSI6IjI2Y2M4NTVmLWI3M2UtNGYyYS1iZmQ2LTg3OWE5MWYyNmQzNCIsImF0X2hhc2giOiJyRmtfcGRvQ2QzaGVaaklsNGU1WFVnIiwiYWNyIjoiMSIsInNpZCI6IjI2Y2M4NTVmLWI3M2UtNGYyYS1iZmQ2LTg3OWE5MWYyNmQzNCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20ifQ.IDSPxxfAr5DiuCZywCTWSSknt36B93YPIkkAHYryy5qbNOgR7kw8y0uXAq8zgvtNBpdgiceIs6KOyVwHxjbDf6-hvL4ExF8QnBav2aQLft_-xacfshKbs_-USGJb8hSpBFo1bvgH2gQOYYP08eKUjvyefAh-Su13fs4J1Bh6vICmZeVst5dxA54gmiTfHMGvij3iFpdqIb6-aySI3xRo_f3eZRNh-lumlaZn2E57IIOo2YcgZyF7eS6kJws0kY3s_k-DxZiQ8j8LENr_BvVKI1ZM4Bn-KMMJrHL3MJOuMD0yY70hCcTPoiSjE_FAMS2hXXfDcayfgLqEQw98ehG-hA`;
        // Add access_token, refresh_token and expirations to the token right after signin
        // token.accessToken = `eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoYWg4STkxUWlBRURqbGNhd1J2eVQ0bHY0SEx2eFRvVzFZdTVNU0tOcjJZIn0.eyJleHAiOjE3MDM2NjY4NzgsImlhdCI6MTcwMzY2NjU3OCwiYXV0aF90aW1lIjoxNzAzNjY2NTc4LCJqdGkiOiJlOTQ1Y2RlZC01YWM1LTRhZDYtODk4NC1jYTI2M2E3ZjY2ZGUiLCJpc3MiOiJodHRwczovL2F1dGgueW91bWFyby5qcC9yZWFsbXMvc2FtcGxlIiwiYXVkIjpbIm5lc3Rqcy1zYW1wbGUiLCJhY2NvdW50Il0sInN1YiI6ImIzZDdhOWJjLWJmMjEtNDlkMy1hN2Y4LWIxNWI4NWQ2OWVhNCIsInR5cCI6IkJlYXJlciIsImF6cCI6Im51eHQtc2FtcGxlIiwic2Vzc2lvbl9zdGF0ZSI6IjI2Y2M4NTVmLWI3M2UtNGYyYS1iZmQ2LTg3OWE5MWYyNmQzNCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9hcHAueW91bWFyby5qcCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1zYW1wbGUiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwic2FtcGxlLXVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJuZXN0anMtc2FtcGxlIjp7InJvbGVzIjpbInVzZXIiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiIyNmNjODU1Zi1iNzNlLTRmMmEtYmZkNi04NzlhOTFmMjZkMzQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJlZmVycmVkX3VzZXJuYW1lIjoidXNlcjFAZXhhbXBsZS5jb20iLCJlbWFpbCI6InVzZXIxQGV4YW1wbGUuY29tIn0.KqmU4FinSvZCxx2wqSCUU77u7GhZeYhkMOnUN-1FA6zXMczEpcaOjjLr_yYE9QEVNwCVp0jb2tfA7kGWiObopBMItYkq7Sphi7Kqi394sPT1n8URiX1r88jFBnZPNvpYi_K_jjUmGa1KgV_kujwY7V9AZXUP-0zp8gCmgL-KDForG6ZUfW1kGpREjLgwK4FLJgzfZrmwcPzY5nD6Y8ksEKLrm-zS8cvzotuOSYm5ONmBB4Mnu7Sw5xGEXKYU4PPpBmjJQC1yOhqYLzQYvxTbqGPKPDdTOMYkkSm7wUX2FsZ9ADSa4qsHCuL2-BJEwkENWQEyKOw0bnf-7YizQca-ww`;
        // token.refreshToken = `eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2NDQ4YTVkOS0zNmYzLTRmY2QtYTA3Yi1hN2FkMDI5MDc2MzQifQ.eyJleHAiOjE3MDM3MDI1NzgsImlhdCI6MTcwMzY2NjU3OCwianRpIjoiNDI1OTE4MDktNTk4Zi00NTYxLThhY2UtY2I4NTAzNWY4OTQwIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnlvdW1hcm8uanAvcmVhbG1zL3NhbXBsZSIsImF1ZCI6Imh0dHBzOi8vYXV0aC55b3VtYXJvLmpwL3JlYWxtcy9zYW1wbGUiLCJzdWIiOiJiM2Q3YTliYy1iZjIxLTQ5ZDMtYTdmOC1iMTViODVkNjllYTQiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoibnV4dC1zYW1wbGUiLCJzZXNzaW9uX3N0YXRlIjoiMjZjYzg1NWYtYjczZS00ZjJhLWJmZDYtODc5YTkxZjI2ZDM0Iiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInNpZCI6IjI2Y2M4NTVmLWI3M2UtNGYyYS1iZmQ2LTg3OWE5MWYyNmQzNCJ9.XV-U5YuElXuBJM8aDQ67OY42uOXuFoeyzb2BVyEYtbk`;
        token.accessTokenExpired =
          Date.now() + (account.expires_in - 15) * 1000;
        token.refreshTokenExpired =
          Date.now() + (account.refresh_expires_in - 15) * 1000;
        token.user = user;
        return token;
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpired) return token;

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
  },
  events: {
    signOut: async (message) => {
      const issuerUri = runtimeConfig.public.issuer;
      const authOriginUri = encodeURIComponent(runtimeConfig.public.authOrigin);
      const idToken = message.token.idToken;

      const signOutUrl = `${issuerUri}/protocol/openid-connect/logout?post_logout_redirect_uri=${authOriginUri}&id_token_hint=${idToken}`;
      await fetch(signOutUrl);
    },
  },
});

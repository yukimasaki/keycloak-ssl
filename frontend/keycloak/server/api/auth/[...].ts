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
        token.idToken = account.id_token;
        // Add access_token, refresh_token and expirations to the token right after signin
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
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

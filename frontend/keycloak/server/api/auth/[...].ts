import { NuxtAuthHandler } from '#auth';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { Provider } from 'next-auth/providers';

interface ExtendedSession extends Session {
  accessToken?: string;
}

interface ExtendedJwt extends JWT {
  accessToken?: string;
}

const keycloak: Provider = {
  id: 'keycloak',
  name: 'Keycloak Public Client',
  wellKnown: process.env.NUXT_PUBLIC_AUTH_WELLKNOWN,
  type: 'oauth',
  authorization: {
    params: {
      scope: 'openid email profile',
    },
  },
  idToken: true,
  clientId: process.env.NUXT_PUBLIC_AUTH_CLIENT_ID,
  client: {
    token_endpoint_auth_method: 'none',
  },
  profile(profile) {
    return {
      id: profile.sid,
      name: profile.preferred_username,
      email: profile.email,
      image: 'none',
    }
  },
}

export default NuxtAuthHandler({
  secret: 'secret',
  providers: [
    keycloak,
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session(
      { session, token }: { session: ExtendedSession, token: ExtendedJwt }
    ) {
      session.accessToken = token.accessToken;
      return session;
    }
  },
});

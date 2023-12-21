import { NuxtAuthHandler } from '#auth';
import { Session } from 'next-auth';
import { Profile } from 'next-auth';
import { User } from 'next-auth';
import { Account } from 'next-auth';
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
      id: profile.sub,
      name: profile.name ?? profile.preferred_username,
      email: profile.email,
      image: profile.picture,
    }
  },
}
export default NuxtAuthHandler({
  secret: runtimeConfig.public.authSecret,
  providers: [
    keycloakCustomProvider,
  ],
  callbacks: {
    async jwt({ token, account, profile }: {
      token: JWT,
      account: Account | null,
      profile?: Profile | undefined,
    }) {
      if (account?.id_token) {
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token, user }: {
      session: Session,
      token: JWT,
      user: User,
    }) {
      session.user.idToken = token.idToken;
      return session;
    },
  },
  events: {
    signOut: async (message) => {
      const runtimeConfig = useRuntimeConfig();
      const issuerUri = runtimeConfig.public.issuer;
      const authOriginUri = encodeURIComponent(runtimeConfig.public.authOrigin);
      const idToken = message.token.idToken;

      const signOutUrl = `${issuerUri}/protocol/openid-connect/logout?post_logout_redirect_uri=${authOriginUri}&id_token_hint=${idToken}`;
      await fetch(signOutUrl);
    },
  },
});

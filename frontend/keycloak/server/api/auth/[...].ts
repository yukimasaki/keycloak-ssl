import { NuxtAuthHandler } from '#auth';
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
});

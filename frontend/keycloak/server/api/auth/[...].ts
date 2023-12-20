import { NuxtAuthHandler } from '#auth';
import KeycloakProvider from "next-auth/providers/keycloak";

export default NuxtAuthHandler({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID || '',
      clientSecret: process.env.KEYCLOAK_SECRET || '',
      issuer: process.env.KEYCLOAK_ISSUER || '',
    }),
  ],
});

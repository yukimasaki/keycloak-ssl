/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    keycloakClientId: process.env.KEYCLOAK_CLIENT_ID,
    keycloakClientSecret: process.env.KEYCLOAK_CLIENT_ID,
    keycloakIssuer: process.env.KEYCLOAK_CLIENT_ID,
    nextAuthUrl: process.env.NEXTAUTH_URL,
  },
}

module.exports = nextConfig;

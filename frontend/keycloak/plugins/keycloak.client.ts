import Keycloak from "keycloak-js";

export default defineNuxtPlugin(async (app) => {
  const runtimeConfig = useRuntimeConfig();
  const keycloak = new Keycloak({
    url: runtimeConfig.public.authUrl,
    realm: runtimeConfig.public.authRealm,
    clientId: runtimeConfig.public.authClientId,
  });

  await keycloak.init({
    onLoad: "check-sso",
  });

  keycloak.updateToken(2000);

  return {
    provide: {
      keycloak,
    }
  }
});

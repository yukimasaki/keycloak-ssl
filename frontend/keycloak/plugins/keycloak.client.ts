import Keycloak from "keycloak-js";

export default defineNuxtPlugin((app) => {
  const runtimeConfig = useRuntimeConfig();
  const keycloak = new Keycloak({
    url: runtimeConfig.public.authUrl,
    realm: runtimeConfig.public.authRealm,
    clientId: runtimeConfig.public.authClientId,
  });

  keycloak.init({
    onLoad: "login-required",
  });

  keycloak.updateToken(2000);
  app.$keycloak = keycloak;
});

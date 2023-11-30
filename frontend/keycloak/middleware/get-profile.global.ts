export default defineNuxtRouteMiddleware(async () => {
  const runtimeConfig = useRuntimeConfig();
  const apiUrl: string = runtimeConfig.public.apiUrl;
  if (!apiUrl) throw new Error('API URLが設定されていません');

  // Keycloakの型定義をするにはどうしたらいい？
  const keycloak = useNuxtApp().$keycloak;
  console.log(keycloak);

  // const authorizationHeader = keycloak.token

  // データベースからプロフィール情報を取得
  const { data: profile } = await useFetch(`${apiUrl}/profiles/me`, {
    // headers: authorizationHeader,
  });

  if (!profile) return navigateTo('/setProfile');

  useState('profile', () => profile);
});

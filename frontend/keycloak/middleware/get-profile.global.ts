export default defineNuxtRouteMiddleware(async () => {
  const runtimeConfig = useRuntimeConfig();
  const apiUrl: string = runtimeConfig.public.apiUrl;
  if (!apiUrl) throw new Error('API URLが設定されていません');

  const keycloak: any = useNuxtApp().$keycloak;
  console.log(`keycloak:`);
  console.log(keycloak);
  // undefinedになってしまう
  console.log(`keycloak.token:`);
  console.log(keycloak.token);

  // データベースからプロフィール情報を取得
  const { data: profile } = await useFetch(`${apiUrl}/profiles/me`, {
    headers: {
      Authorization: `Bearer ${keycloak.token}`,
    },
  });

  if (!profile) return navigateTo('/setProfile');

  useState('profile', () => profile);
});

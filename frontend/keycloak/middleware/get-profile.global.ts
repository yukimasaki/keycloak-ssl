export default defineNuxtRouteMiddleware(async () => {
  const runtimeConfig = useRuntimeConfig();
  const apiUrl: string = runtimeConfig.public.apiUrl;
  if (!apiUrl) throw new Error('API URLが設定されていません');

  const token: string | undefined = useNuxtApp().$keycloak.token;

  // データベースからプロフィール情報を取得
  const { data: profile } = await useFetch(`${apiUrl}/profiles/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!profile) return navigateTo('/setProfile');

  useState('profile', () => profile);
});

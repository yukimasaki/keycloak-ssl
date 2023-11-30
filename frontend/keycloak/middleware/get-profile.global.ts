export default defineNuxtRouteMiddleware(async () => {
  const runtimeConfig = useRuntimeConfig();
  const apiUrl: string = runtimeConfig.public.apiUrl;
  if (!apiUrl) throw new Error('API URLが設定されていません');

  // フロントエンド側からKeycloakのaccess_tokenを取得するにはどうしたらいい？
  const authorizationHeader = useRequestHeaders(['authorization']);

  // データベースからプロフィール情報を取得
  const { data: profile } = await useFetch(`${apiUrl}/profiles/me`, {
    // headers: {
    //   Authorization: 'Bearer '
    // },
    headers: authorizationHeader,
  });

  if (!profile) return navigateTo('/setProfile');

  useState('profile', () => profile);
});

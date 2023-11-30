export default defineNuxtRouteMiddleware(async () => {
  const runtimeConfig = useRuntimeConfig();
  const apiUrl: string = runtimeConfig.public.apiUrl;
  if (!apiUrl) throw new Error('API URLが設定されていません');

  // access_tokenからsub(KeycloakのユーザーID)を取得

  // データベースからプロフィール情報を取得
  const profile = await useFetch(`${apiUrl}/profile/`);
});

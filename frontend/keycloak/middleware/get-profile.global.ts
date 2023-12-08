export default defineNuxtRouteMiddleware(async (to, from) => {
  // /profileに強制遷移するのを除外するページ
  const excludes: string[] = [
    '/test',
    '/welcome',
  ];
  if (excludes.includes(to.path)) return;

  const runtimeConfig = useRuntimeConfig();
  const apiUrl: string = runtimeConfig.public.apiUrl;
  if (!apiUrl) throw new Error('API URLが設定されていません');

  const token: string | undefined = useNuxtApp().$keycloak.token;

  // アクセストークンが存在しない場合はログインが必要
  if (!token) useNuxtApp().$keycloak.login();

  // データベースからプロフィール情報を取得
  const { data: profile } = await useFetch(`${apiUrl}/profiles/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!profile.value && to.path !== '/profile') return navigateTo('/profile');

  useState('profile', () => profile);
});

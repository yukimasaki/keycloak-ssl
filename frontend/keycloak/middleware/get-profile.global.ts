import type { IProfile } from "~/interfaces/IProfile";

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

  // ストアからプロフィール情報を取得
  const storedProfile = useState('profile');

  // ストアに存在しない場合は、データベースからプロフィール情報を取得
  if (!storedProfile.value) {
    const { data: dbProfile } = await useFetch(`${apiUrl}/profiles/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!dbProfile.value && to.path !== '/profile') return navigateTo('/profile');
    useState('profile', () => dbProfile);
  }
});

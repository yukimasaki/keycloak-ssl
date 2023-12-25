import type { IProfile } from "~/interfaces/IProfile";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const excludePath = [
    '/profile',
    '/welcome',
    '/test',
  ];
  if (excludePath.includes(to.path)) return;
  const { data } = await useFetch('/api/profiles/me');
  if (data.value.errorCode) {
    return navigateTo('/profile');
  }
});

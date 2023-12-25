import { getToken } from '#auth';
import { IProfile } from '~/interfaces/IProfile';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();

  const token = await getToken({ event });
  const accessToken = token?.accessToken;

  const profile = await fetch(`${runtimeConfig.public.apiUrl}/profiles/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(async (data) => {
      const profile: IProfile = await data.json();
      return profile;
    });
  return profile;
});

import { getServerSession } from '#auth';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  const accessToken = session?.user.accessToken;

  try {
    const runtimeConfig = useRuntimeConfig();
    const response = await fetch(`${runtimeConfig.public.apiUrl}/profiles/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      const uuid = session?.user.sub;

      return {
        errorCode: response.status,
        errorText: response.statusText,
        keycloakUuid: uuid,
      }
    }
    return await response.json()
  } catch (error) {
    console.log(error);
  }
});

import { getServerSession } from '#auth';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  const accessToken = session?.user.accessToken;
  try {
    // issue: NestJSにリクエストを送信すると空のオブジェクトになってしまう
    const body = await readBody(event);
    console.log(body);

    const runtimeConfig = useRuntimeConfig();
    const response = await fetch(`${runtimeConfig.public.apiUrl}/profiles`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
});

import { getToken } from '#auth';

export default defineEventHandler(async (event) => {
  const token = await getToken({ event });
  const idToken = token?.idToken;
  // console.log(idToken);
  const accessToken = token?.accessToken;
  console.log(accessToken);

  const response = await fetch('https://api.youmaro.jp/profiles/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(data => {
      console.log(data);
    });
});

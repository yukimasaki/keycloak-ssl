import { getServerSession } from '#auth'
import { navigateTo } from 'nuxt/app';

export default eventHandler(async (event: any) => {
  const session = await getServerSession(event);
  if (!session) {
    // return await navigateTo('/api/auth');
  }
});

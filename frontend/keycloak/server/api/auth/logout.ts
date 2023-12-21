export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig();
  const issuerUri = runtimeConfig.public.issuer;
  const authOriginUri = encodeURIComponent(runtimeConfig.public.authOrigin);
  const clientId = runtimeConfig.public.clientId;

  const signOutUrl = `${issuerUri}/protocol/openid-connect/logout?post_logout_redirect_uri=${authOriginUri}&client_id=${clientId}`;
  return sendRedirect(event, signOutUrl, 302);
});

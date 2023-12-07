export const getBearerToken = (
  authorizationHeader: string,
): string => {
  return authorizationHeader.replace('Bearer ', '');
}

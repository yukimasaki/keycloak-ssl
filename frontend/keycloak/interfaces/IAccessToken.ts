export interface IAccessToken {
  sub: string;
  email: string;
  resource_access: {
    [key: string]: {
      roles: string[];
    };
  };
}

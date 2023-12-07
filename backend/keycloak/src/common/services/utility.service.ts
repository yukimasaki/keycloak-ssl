import { Injectable } from "@nestjs/common";
import { AccessToken } from "../interfaces/access-token.interface";

@Injectable()
export class UtilityService {
  getBearerToken(
    authorizationHeader: string,
  ): string {
    return authorizationHeader.replace('Bearer ', '');
  }

  decodeJwt(
    bearerToken: string,
  ): AccessToken {
    const accessToken: string = this.jwtService.decode(bearerToken);
    return JSON.parse(JSON.stringify(accessToken));
  }
}

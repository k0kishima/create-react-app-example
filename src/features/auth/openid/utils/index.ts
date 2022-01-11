import { calcDateFromUnixtime } from '@/utils/date';
import { AuthToken, TokenResponse } from '../';

export const createAuthTokenFromTokenResponse = (
  tokenResponse: TokenResponse
): AuthToken => {
  return {
    accessToken: tokenResponse.access_token,
    refreshToken: tokenResponse.refresh_token,
    accessTokenExpiresAt: calcDateFromUnixtime(
      tokenResponse.created_at,
      tokenResponse.expire_in
    ),
    refreshTokenExpiresAt: calcDateFromUnixtime(
      tokenResponse.created_at,
      tokenResponse.refresh_token_expire_in
    ),
  };
};

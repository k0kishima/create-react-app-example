export type AuthToken = {
  accessToken: string,
  refreshToken: string,
  accessTokenExpiresAt: Date | undefined,
  refreshTokenExpiresAt: Date | undefined,
}

export type RefreshTokenRequest = {
  grant_type: 'refresh_token';
  refresh_token: string;
  client_id: string;
}

export type TokenRequest = {
  grant_type: 'authorization_code';
  scope: 'openid';
  client_id: string;
  code: string;
  code_verifier?: string;
  redirect_uri?: string;
};

export type TokenResponse = {
  id_token: string;
  access_token: string;
  refresh_token: string;
  token_type: string;
  refresh_token_expire_in: number;
  expire_in: number;
  created_at: number;
};

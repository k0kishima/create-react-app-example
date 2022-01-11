import { OAUTH_CLIENT_ID, OPENID_PROVIDER_BASE_URL, THIS_APP_BASE_URL } from '@/config';

export const CLIENT_ID = OAUTH_CLIENT_ID;

export const Url = {
  authorizationEndpointUri: `${OPENID_PROVIDER_BASE_URL as string}/auth/openid/authorize`,
  redirectUri: `${THIS_APP_BASE_URL as string}/auth/openid/callback`,
  tokenEndpointUri: `${OPENID_PROVIDER_BASE_URL as string}/auth/openid/token`,
} as const;

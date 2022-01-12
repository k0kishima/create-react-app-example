import { axios } from './base';

import { RefreshTokenRequest, TokenRequest, TokenResponse, Url } from '../';
import { HTTPHeaders } from '@/types';

export const createToken = async (
  data: RefreshTokenRequest | TokenRequest
): Promise<[TokenResponse, HTTPHeaders]> => {
  const response = await axios.post<TokenResponse>(Url.tokenEndpointUri, data);
  return [response.data, response.headers];
};

import Axios, { AxiosRequestConfig } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import { OPENID_PROVIDER_BASE_URL } from '@/config';
import { HTTPHeaders } from '@/types';
import { refreshAuthLogic } from '@/lib/axios';

const defaultConfig: AxiosRequestConfig = {
  baseURL: OPENID_PROVIDER_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  } as HTTPHeaders,
};

export const axios = Axios.create(defaultConfig);
createAuthRefreshInterceptor(axios, refreshAuthLogic);

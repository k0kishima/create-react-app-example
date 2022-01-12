import { AxiosError } from 'axios';

import { store } from '@/stores/store';
import {
  authStore,
  CLIENT_ID,
  createToken,
  createAuthTokenFromTokenResponse,
} from '@/features/auth/openid';
import {} from '@/features/auth/openid/utils';

export const refreshAuthLogic = async (error: AxiosError) => {
  // 期限切れではないと思しきエラーの場合はリフレッシュを試行しない
  if (!error.response || error.response.status !== 400) {
    return Promise.reject(error);
  }

  const {
    auth: { refreshTokenExpiresAt, refreshToken },
  } = store.getState();

  // リフレッシュトークン自体が無効な場合はリフレッシュを試行しない
  if (!refreshTokenExpiresAt || new Date(refreshTokenExpiresAt) < new Date()) {
    return Promise.reject(error);
  }

  // トークンリフレッシュと新トークンでのリクエスト再送
  try {
    // トークンリフレッシュ
    const [tokenResponse] = await createToken({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: CLIENT_ID,
    });

    // 新トークンの永続化
    store.dispatch(
      authStore.actions.updateTokens({
        authToken: createAuthTokenFromTokenResponse(tokenResponse),
      })
    );

    // 新トークンでのリクエスト再送
    error.config.headers![
      'Authorization'
    ] = `Bearer ${tokenResponse.access_token}`;
    return Promise.resolve();
  } catch (_) {
    return Promise.reject(error);
  }
};

import { AxiosError } from 'axios';

import {
  authStore,
  createAuthTokenFromTokenResponse,
} from '@/features/auth/openid';
import { store } from '@/stores/store';
import { refreshAuthLogic } from '../axios';

describe('refreshAuthLogic', () => {
  const dispatch = store.dispatch;

  const baseError = {
    isAxiosError: true,
    toJSON: () => {
      return { dummy: 'dummy' };
    },
  };

  const invalidAccessTokenResponse = {
    data: {
      error: 'invalid_grant',
      error_description:
        'The provided authorization grant is invalid, expired, revoked, blah blah blah',
    },
    status: 400,
    statusText: 'Bad Request',
  };

  const tokenResponse = {
    id_token: 'dummy',
    access_token: 'dummy',
    refresh_token: 'dummy',
    token_type: 'dummy',
    refresh_token_expire_in: 360000,
    expire_in: 180000,
    created_at: new Date().getTime() / 1000,
  };

  test('to do not refresh when http status code is not 400', () => {
    const error = {
      ...baseError,
      config: {},
      response: {
        ...invalidAccessTokenResponse,
        status: 500,
      },
    } as AxiosError;

    expect(refreshAuthLogic(error)).rejects.toMatchObject(error);
  });

  test('to do not refresh when refresh token already expired', () => {
    // TODO: スタブを使う
    const authToken = createAuthTokenFromTokenResponse({
      ...tokenResponse,
      refresh_token_expire_in: -1000,
    });
    dispatch(authStore.actions.updateTokens({ authToken: authToken }));

    const error = {
      ...baseError,
      config: {},
      response: invalidAccessTokenResponse,
    } as AxiosError;

    expect(refreshAuthLogic(error)).rejects.toMatchObject(error);
  });

  // TODO: 正式実装
  xtest('to refresh when refresh token is not expired in bad request error', () => {
    // TODO: スタブを使う
    const authToken = createAuthTokenFromTokenResponse(tokenResponse);
    dispatch(authStore.actions.updateTokens({ authToken: authToken }));

    const error = {
      ...baseError,
      config: {},
      response: invalidAccessTokenResponse,
    } as AxiosError;

    //expect(refreshAuthLogic(error)).resolves
  });
});

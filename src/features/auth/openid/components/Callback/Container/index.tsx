import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import {
  authStore,
  CLIENT_ID,
  createAuthTokenFromTokenResponse,
  createToken,
  TokenRequest,
  Url,
} from '@/features/auth/openid';
import { useAppDispatch } from '@/stores/store';
import storage from '@/utils/storage';

export const Container: React.VFC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const _query = new URLSearchParams(location.search);
  const state = _query.get('state') as string;
  const persistedState = storage.getState();

  const params: TokenRequest = {
    grant_type: 'authorization_code',
    scope: 'openid',
    code: _query.get('code') as string,
    client_id: CLIENT_ID,
    code_verifier: storage.getCodeVerifier(),
    redirect_uri: Url.redirectUri,
  };

  useEffect(() => {
    if (state === persistedState) {
      storage.clearState();
    } else {
      // TODO: UI/UX設計の上実装
      alert('CSRF detected.');
      return;
    }

    (async () => {
      // TODO: IDトークンの検証(nonceの確認もここ)
      const [tokenResponse] = await createToken(params);
      const authToken = createAuthTokenFromTokenResponse(tokenResponse);
      dispatch(authStore.actions.updateTokens({ authToken: authToken }));
    })();

    setLoading(false);
    return;
  }, []);

  // TODO: 正式なUI決まったら書き直す
  if (loading) {
    return <React.Fragment />;
  } else {
    navigate('/dashboard');
    return <React.Fragment />;
  }
};

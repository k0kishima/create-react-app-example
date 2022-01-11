import React, { useEffect } from 'react';
import { stringify } from 'querystring';

import { CLIENT_ID, Url } from '@/features/auth/openid';
import { createRandomString, createCodeChallenge } from '@/utils/randomization';
import storage from '@/utils/storage';

type Params = {
  response_type: 'code';
  client_id: string;
  redirect_uri: string;
  scope: string;
  state: string;
  nonce: string;
  code_challenge: string;
  code_challenge_method: 'S256';
};

export const Container: React.VFC = () => {
  useEffect(() => {
    const state = createRandomString(32);
    const nonce = createRandomString(32);
    const [codeVerifier, codeChallenge] = createCodeChallenge();

    storage.setState(state);
    storage.setNonce(nonce);
    storage.setCodeVerifier(codeVerifier);

    const params: Params = {
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: Url.redirectUri,
      scope: 'openid',
      state: state,
      nonce: nonce,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
    };

    const authorizationUri = `${Url.authorizationEndpointUri}?${stringify(
      params
    )}`;
    window.location.assign(authorizationUri);
  }, []);

  return <React.Fragment />;
};

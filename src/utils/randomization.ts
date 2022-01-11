import { createHash, randomBytes } from 'crypto';

import { base64UrlSafeEncode } from '@/utils/encoding';

export const createRandomString = (size: number) => {
  return randomBytes(size).reduce((p, i) => p + (i % 36).toString(36), '');
}

export const createCodeChallenge = (): [string, string] => {
  const codeVerifier = createRandomString(128);
  const hash = createHash('sha256');
  hash.update(codeVerifier);

  const codeChallenge = base64UrlSafeEncode(hash.digest('base64'));
  return [codeVerifier, codeChallenge];
}

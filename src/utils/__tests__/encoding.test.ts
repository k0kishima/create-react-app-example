import { base64UrlSafeEncode } from '../encoding';

test('base64UrlSafeEncode', () => {
  const result = base64UrlSafeEncode('foo+bar==/hoge+piyo==');

  expect(result).toEqual('foo-bar==_hoge-piyo');
});

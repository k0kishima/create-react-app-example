// この辺行う組み込みモジュールやパッケージが見つからなかったので暫定的に実装
//
// TODO:

// 組み込みモジュールやパッケージ使えるようになったらそっちにオフロードする
export const base64UrlSafeEncode = (str: string) => {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// expiresInはあるリソース（例えばアクセストークンなど）の存続時間を秒単位で示す
// 例えば値が3600なら基準となる時刻から1時間で有効期限切れとなる
// このケースにおける基準となる時刻は offset である
export const calcDateFromUnixtime = (offset: number, expiresIn = 0) => {
  // Dateのコンストラクタはミリ秒単位なので1000を乗じている
  return new Date((offset + expiresIn) * 1000);
}

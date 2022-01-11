const storagePrefix = 'mnemonic_trainer_';

type storageKeys = 'state' | 'nonce' | 'codeVerifier';

const setter = <T>(key: storageKeys, value: T) => {
  window.localStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(value));
};
const getter = (key: storageKeys): string => {
  return JSON.parse(
    window.localStorage.getItem(`${storagePrefix}${key}`) as string
  );
};

const cleaner = (key: storageKeys) => {
  window.localStorage.removeItem(`${storagePrefix}${key}`);
};

// TODO:
// Rubyのメタプロみたいな感じで動的に定義したい
const storage = {
  getState: () => {
    return getter('state');
  },
  setState: (value: string) => {
    setter<string>('state', value);
  },
  clearState: () => {
    cleaner('state');
  },
  getNonce: () => {
    return getter('state');
  },
  setNonce: (value: string) => {
    setter<string>('nonce', value);
  },
  clearNonce: () => {
    cleaner('nonce');
  },
  getCodeVerifier: () => {
    return getter('codeVerifier');
  },
  setCodeVerifier: (value: string) => {
    setter<string>('codeVerifier', value);
  },
  clearCodeVerifier: () => {
    cleaner('codeVerifier');
  },
};

export default storage;

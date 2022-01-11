import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';

import { AuthToken } from '../';

export type State = {
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: Date | undefined;
  refreshTokenExpiresAt: Date | undefined;
};
export const initialState: State = {
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
  accessTokenExpiresAt: undefined,
  refreshTokenExpiresAt: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateTokens: (state, action: PayloadAction<{ authToken: AuthToken }>) => {
      const { authToken } = action.payload;

      return Object.assign(state, {
        ...authToken,
        isAuthenticated: !isEmpty(authToken.accessToken),
      });
    },
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;

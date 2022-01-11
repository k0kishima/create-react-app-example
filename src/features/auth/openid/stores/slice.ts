import { createSlice } from '@reduxjs/toolkit';

export type State = {
  isAuthenticated: boolean;
};

export const initialState: State = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createSession(state) {
      state.isAuthenticated = true;
      return state;
    },
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;

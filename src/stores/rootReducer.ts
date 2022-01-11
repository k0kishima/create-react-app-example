import { combineReducers } from 'redux';

import authReducer from '@/features/auth/openid/stores';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

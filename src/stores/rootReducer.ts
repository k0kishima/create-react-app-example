import { combineReducers } from 'redux';

import authReducer from '@/features/auth/stores';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

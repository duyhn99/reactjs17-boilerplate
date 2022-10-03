import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import { appReducer } from './slice/AppSlice';

export default combineReducers({
  app: appReducer,
});

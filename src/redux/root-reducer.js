import { combineReducers } from 'redux';

import authorReducer from './reducers/author.reducer';

export default combineReducers({
  author : authorReducer,
});

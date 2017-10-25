import { combineReducers } from 'redux';
import usersReducer from './usersReduces';

export default combineReducers({
  users: usersReducer
});
import { combineReducers } from '@reduxjs/toolkit'
import userReducers from './userReducers';

export default combineReducers({
  users: userReducers,
})
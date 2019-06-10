import { combineReducers } from 'redux';
import * as Gifs from './gifs';
import * as ApiStatus from './apiStatus';

export default combineReducers(Object.assign(
  Gifs,
  ApiStatus,
));
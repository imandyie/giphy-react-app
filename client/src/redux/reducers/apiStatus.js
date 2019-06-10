import createReducer from '../../helpers/createReducer';
import * as types from '../actions/types';

export const isFetching = createReducer(false, {
  [types.IS_FETCHING](state, action) {
    return action.isFetching;
  },
});
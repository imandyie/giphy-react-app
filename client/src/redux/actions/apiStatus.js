import * as types from './types';

export const setApiStatus = ({ isFetching }) => {
  return {
    type: types.IS_FETCHING,
    isFetching,
  };
}
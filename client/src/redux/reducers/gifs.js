import createReducer from '../../helpers/createReducer';
import * as types from '../actions/types';

export const gifs = createReducer({}, {
  [types.SET_GIFS](state, action) {
    return action.gifs;
  },
});

export const gifDetails = createReducer({}, {
  [types.SET_GIF_DETAILS](state, action) {
    return action.gifDetails;
  },
});

export const gifsType = createReducer('', {
  [types.SET_GIFS_TYPE](state, action) {
    return action.gifsType;
  },
});

export const currentPage = createReducer({cat: 0, dog: 0}, {
  [types.SET_CURRENT_PAGE](state, action) {
    return action.currentPage;
  },
});
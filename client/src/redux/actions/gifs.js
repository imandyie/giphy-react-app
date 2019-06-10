import * as types from './types';
import { setApiStatus } from './apiStatus';
import settings from '../../helpers/settings';

export const fetchGifs = (keyword, currentPage) => {
  return (dispatch, getState) => {
    dispatch(setApiStatus({ isFetching: true }));
    const state = getState();

    return fetch(`${settings.apiUrl}/gifs/${keyword}/${currentPage}/25`).then(res => res.json())
    .then(({gifs}) => {
      let newGifsList = state.gifs;

      if (state.gifs[keyword]) {
        newGifsList[keyword] = newGifsList[keyword].concat(gifs);
      } else {
        newGifsList[keyword] = gifs;
      }
 
      dispatch(setCurrentPage(keyword, currentPage));
      dispatch(setGifsType(keyword));
      dispatch(setGifs({gifs: newGifsList}));
      dispatch(setApiStatus({ isFetching: false }));
    }).catch((err) => {
      dispatch(setApiStatus({ isFetching: false }));
      console.log(err);
    });
  }
};

export const fetchGifDetails = (gifId) => {
  return (dispatch, getState) => {
    dispatch(setApiStatus({ isFetching: true }));

    return fetch(`${settings.apiUrl}/gif/details/${gifId}`).then(res => res.json())
    .then(({gifDetails}) => {
      if (gifDetails) {
        dispatch(setGifDetails({ gifDetails }));
      }
      dispatch(setApiStatus({ isFetching: false })); 
    }).catch((err) => {
      dispatch(setApiStatus({ isFetching: false }));
      console.log(err);
    });
  }
};

export const findGifDetailsFromStore = (gifId) => {
  return (dispatch, getState) => {
    dispatch(setApiStatus({ isFetching: true }));
    const state = getState();
    const { gifs, gifsType } = state;

    if (gifs && Object.keys(gifs).length && gifsType) {
      const gifsList = gifs[gifsType];
      Object.keys(gifsList).forEach((key) => {
       if (gifsList[key].id === gifId) {
         dispatch(setGifDetails({ gifDetails: gifsList[key] }));   
       }
      });
    }
    dispatch(setApiStatus({ isFetching: false })); 
  }
};

export const setCurrentPage = (keyword, currentPage) => {
  return (dispatch, getState) => {
    const state = getState();
    const newState = state.currentPage;
    newState[keyword] = currentPage; 

    return {
      type: types.SET_CURRENT_PAGE,
      currentPage: newState,
    }
  }
};

export const setGifsType = (gifsType) => {
  return {
    type: types.SET_GIFS_TYPE,
    gifsType,
  }
};

export const setGifs = ({ gifs }) => {
  return {
    type: types.SET_GIFS,
    gifs,
  };
};

export const setGifDetails = ({ gifDetails }) => {
  return {
    type: types.SET_GIF_DETAILS,
    gifDetails,
  };
};
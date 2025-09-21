import { SET_HOTELS } from './constants';

const initialState = {
  list: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default hotelsReducer;
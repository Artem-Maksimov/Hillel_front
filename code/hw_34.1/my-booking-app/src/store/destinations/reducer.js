import { SET_DESTINATIONS } from './constants';

const initialState = {
  list: [],
};

const destinationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DESTINATIONS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default destinationsReducer;
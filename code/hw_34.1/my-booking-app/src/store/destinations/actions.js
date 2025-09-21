import { GET_DESTINATIONS, SET_DESTINATIONS } from './constants';

export const getDestinations = () => ({
  type: GET_DESTINATIONS,
});

export const setDestinations = (destinations) => ({
  type: SET_DESTINATIONS,
  payload: destinations,
});
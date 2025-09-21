import { GET_HOTELS, SET_HOTELS } from './constants';

export const getHotels = (formData) => ({
  type: GET_HOTELS,
  payload: formData,
});

export const setHotels = (hotels) => ({
  type: SET_HOTELS,
  payload: hotels,
});
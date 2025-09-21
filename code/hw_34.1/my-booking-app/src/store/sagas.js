import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import { GET_HOTELS } from './hotels/constants';
import { GET_DESTINATIONS } from './destinations/constants';
import { setHotels } from './hotels/actions';
import { setDestinations } from './destinations/actions';

function* fetchDestinationsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/destinations');
    yield put(setDestinations(response.data));
  } catch (error) {
    console.error('Помилка завантаження напрямків:', error);
  }
}

function* fetchHotelsSaga(action) {
  try {
    const { destination } = action.payload;
    const response = yield call(axios.get, `http://localhost:3001/hotels?destination=${destination}`);
    yield put(setHotels(response.data));
    yield put(push('/hotels'));
  } catch (error) {
    console.error('Помилка завантаження готелів:', error);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_DESTINATIONS, fetchDestinationsSaga),
    takeLatest(GET_HOTELS, fetchHotelsSaga),
  ]);
}
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import hotelsReducer from './hotels/reducer';
import destinationsReducer from './destinations/reducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  hotels: hotelsReducer,
  destinations: destinationsReducer
});

export default rootReducer;
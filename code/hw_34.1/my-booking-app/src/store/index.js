import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history)
];

const composeEnhancers =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import {HTTPClient} from '../service';

import RootReducer from './root.reducer';
import RootSaga from './root.saga';

import {appConst_init} from './appStore/appStore.action';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
  // middleware.push(logger)
}

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store)

// export const persistor = persistStore(store,{}, () => {
//   const {authToken} = store.getState().auth;
//   if(authToken) {
//     HTTPClient.saveHeader({key: 'Authorization', value: `Bearer ${authToken}`});
//     store.dispatch(appConst_init());
//   }
// });

sagaMiddleware.run(RootSaga);

export default store;
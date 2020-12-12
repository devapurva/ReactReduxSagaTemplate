import {combineReducers} from 'redux';

import appDataReducer from './appStore/appStore.reducer';
import counterReducer from './counter/counterSlice';



const rootReducer = combineReducers({
  appData: appDataReducer,
  counter: counterReducer
});

export default rootReducer;
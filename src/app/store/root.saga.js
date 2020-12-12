import {call, all} from 'redux-saga/effects';
import {appStoreSaga} from './appStore/appStore.saga';

function* RootSaga() {
  yield all([
    call(appStoreSaga)
  ]);
}

export default RootSaga;
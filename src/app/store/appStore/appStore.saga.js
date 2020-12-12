import {takeLatest, all, call, put} from 'redux-saga/effects';
import {appStoreActiontype} from './appStore.actiontype';
// import {appConstSuccess} from './appStore.action'
// import {appService} from '../../service/api/app.service'


export function* handleAppConstInit() {
  // const appConstant = yield appService.getAppConstant();
  // yield put(appConstSuccess(appConstant));
}

export function* appConstantSaga() {
  yield takeLatest(appStoreActiontype.APPCONSTANT_INIT, handleAppConstInit);
}

export function* appStoreSaga() {
  yield all([
    call(appConstantSaga)
  ])
}
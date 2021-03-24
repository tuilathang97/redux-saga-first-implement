import { put, takeEvery, all } from 'redux-saga/effects'

function* myFirstSaga() {
  console.log('Hii Saga');
}

const delay = ms => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(1000);
  yield put({type: 'INCREMENT'});
}

function* watchIncrementAsync() {
  yield takeEvery('ASYNC_INCREMENT', incrementAsync);
}

export default function* rootSage() {
  yield all([
    myFirstSaga(),
    watchIncrementAsync()
  ])
}
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

export function* helloSaga() {
  console.log('Hello Sagas!')
}

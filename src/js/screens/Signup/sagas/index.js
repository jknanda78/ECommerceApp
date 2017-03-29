import fetch from 'isomorphic-fetch';
import { takeEvery, takeLatest, delay } from 'redux-saga';
import { take, fork, put, call } from 'redux-saga/effects';

export function* updateBrowserInfo() {
  yield put({ type: 'APPLICATION_ONLOAD' });
}

function callAPI(config) {
  return fetch("http://www.mocky.io/v2/5870a6f8120000d001ad16eb",
  {
    method: "GET",
    headers: {
      'Accept'        : 'application/json',
      'Content-Type'  : 'application/json'
    },
    body: {
      "name": "jyoti nanda"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(response => ({response}))
  .catch(error => ({error}));
}

function* signupSaveUser() {
  while (true) {
    const {payload} = yield take("SIGNUP_ATTEMPT");
    try {
       const {response} = yield call(callAPI, payload);
       yield put({type: "SUCCESSFUL_SIGNUP", response});
    } catch (e) {
       yield put({type: "SIGNUP_FAILED", message: e.message});
    }
  }

}

export default function* rootSaga() {
  yield [
    updateBrowserInfo(),
    signupSaveUser()
  ]
}

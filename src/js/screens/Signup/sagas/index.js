import fetch from 'isomorphic-fetch';
import { takeEvery, takeLatest, delay } from 'redux-saga';
import { take, fork, put, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

export function* updateBrowserInfo() {
  yield put({ type: 'APPLICATION_ONLOAD' });
}

const Headers = {
  'Accept'        : 'application/json',
  'Content-Type'  : 'application/json'
};

function callAPI(url, method = 'GET', headers = Headers, payload = {}) {
  const Body = JSON.stringify(payload);
  let Mode = 'same-origin',
      Url = url;

  if(!url) {
    return false;
  }

  if(process.env.NODE_ENV === 'development') {
    Url = `${process.env.API_LOCATION_HREF}${url}`
    Mode = 'cors';
  }

  return fetch(Url,
  {
    method: method,
    headers: headers,
    body: Body,
    credentials: 'same-origin',
    mode: Mode
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
       const {response} = yield call(callAPI, '/auth-api/createAccount', 'POST', null, payload);
       yield put({type: "SUCCESSFUL_SIGNUP", response});
       browserHistory.push('/productList');
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

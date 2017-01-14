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

function* signupSaveUser(/*action*/) {
  // console.log("signupSaveUser:", action.payload);

  /* Approach 1 */
  // const saveUser = yield call(callAPI, {body: action.payload, method: "GET"});
  // saveUser.then(response => {
  //   action.dispatch({
  //     type: "SUCCESSFUL_SIGNUP",
  //     response: response.response
  //   });
  // });

  /* Approach 2 */
  // const saveUser = yield call(fetch, "http://www.mocky.io/v2/58618420100000640df3950c", {body: action.payload, method: "GET"});
  // const response = yield saveUser.json();
  //
  // if(response) {
  //     yield put({type: "SUCCESSFUL_SIGNUP", response});
  // } else {
  //   yield put({type: "SIGNUP_FAILED", message: "api failed"});
  // }

  /* Approach 3 */
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

export function* watchSubmitSignupForm() {console.log("watchSubmitSignupForm:", arguments);
  yield takeLatest('SIGNUP_ATTEMPT', signupSaveUser);
}

export default function* rootSaga() {console.log("rootSaga:", arguments);
  yield [
    updateBrowserInfo(),
    signupSaveUser()
    // watchSubmitSignupForm()
  ]
}

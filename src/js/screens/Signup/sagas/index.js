import { takeEvery, takeLatest, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

export function* updateBrowserInfo() {
  yield put({ type: 'APPLICATION_ONLOAD' });
}

function* callAPI() {
  return fetch("http://www.mocky.io/v2/58618420100000640df3950c").then(response => {
      return response.json();
    }).then(response => {
      console.log("@@@@@ response @@@@@", response);
      return response;
    });
}

// Our worker Saga: will perform the async submitSignupForm task
export function* signupSaveUser(action) {console.log("action:", action.payload.user);
  try {
     const response = yield call(callAPI);
     console.log("#### response ####", response);
     if(response.res === "succeess") {
        yield put({type: "SUCCESSFUL_SIGNUP", response});
     }
  } catch (e) {
     yield put({type: "SIGNUP_FAILED", message: e.message});
  }
}

// Our watcher Saga: spawn a new submitSignupFormAsync task on each SIGNUP_FORM_SUBMIT_ASYNC
export function* watchSubmitSignupForm() {
  yield takeEvery('SIGNUP_ATTEMPT', signupSaveUser);
}

export default function* rootSaga() {
  yield [
    updateBrowserInfo(),
    watchSubmitSignupForm()
  ]
}

import {successfulSignup} from "../actions";

export const signupAttempt = (payload) => {
  return dispatch => {
    fetch("http://www.mocky.io/v2/58618420100000640df3950c")
     .then(response => {
        return response.json();
      })
     .then(response => {
        console.log("@@@@@ response @@@@@", response);
        dispatch(successfulSignup(response));
      })
     .catch(error => { console.log('request failed', error); });
  }
}

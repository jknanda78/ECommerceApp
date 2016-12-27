/**
 * The actions module.
 * @module ECommerceApp/action-creators
 */


/**
 * JSDoc style comment.  Does nothing and returns a function.
 * @param {String} bar
 * @return {Function}
 * @author Jyoti <j_k_nanda@hotmail.com>
 */
 import {SIGNUP_FORM_SUBMIT, SUCCESSFUL_SIGNUP, SIGNUP_FAILED} from "./types";

 // export const submitSignupForm = (payload) => ({
 //   type: SIGNUP_ATTEMPT,
 //   payload: {user: "jyoti"}
 // });

 export const submitSignupForm = (dispatch) => {
   return fetch("http://www.mocky.io/v2/58618420100000640df3950c")
    .then(response => {
       return response.json();
     })
    .then(response => {
       console.log("@@@@@ response @@@@@", response);
       return dispatch({
         type: SUCCESSFUL_SIGNUP,
         response
       });
     })
    .catch(error => { console.log('request failed', error); });
 }

/**
 * The actions module.
 * @module ECommerceApp/action-creators
 */


/**
 * JSDoc style comment.  Does nothing and returns a function.
 * @param {Object} payload
 * @return {Function}
 * @author Jyoti <j_k_nanda@hotmail.com>
 */
 import {SIGNUP_FORM_SUBMIT, SUCCESSFUL_SIGNUP, SIGNUP_FAILED} from "./types";

 export const submitSignupForm = (payload) => ({
   type: "SIGNUP_ATTEMPT",
   payload
 });

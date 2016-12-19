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
 import {SUCCESSFUL_SIGNUP, SIGNUP_FAILED} from "./types";

 export const sucessfulSignup = () => ({
   type: SUCCESSFUL_SIGNUP
 });

 export const signupFailure = (err) => ({
   type: SIGNUP_FAILED,
   err
 });

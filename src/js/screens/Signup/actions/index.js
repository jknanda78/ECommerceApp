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
 import {SIGNUP_FORM_SUBMIT} from "./types";

 export const submitSignupForm = () => ({
   type: SIGNUP_FORM_SUBMIT
 });

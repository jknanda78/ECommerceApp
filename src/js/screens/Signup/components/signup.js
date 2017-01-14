import React, { Component, PropTypes } from "react";
import { Field, reduxForm } from 'redux-form';

/**
 * @param {Object} props
 * @returns {JSX}
 */
 function Signup({className, signupOnSubmit, children}) {

  return (
     <div className={className}>
      <header>
        <h1>Create Account</h1>
      </header>
      <form onSubmit={signupOnSubmit}>
        <Field name="firstName" component="input" type="text"/>
        <button name="submit" type="submit">Create Account</button>
      </form>
     </div>
   );
 }

 Signup.propTypes = {
   className: PropTypes.string,
   signupOnSubmit: PropTypes.func
 };

export default reduxForm({
   form: 'signup'
 })(Signup);

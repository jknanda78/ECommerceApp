import React, { PropTypes } from "react";
import { Field, reduxForm } from 'redux-form';

/**
 * @param {Object} props
 * @returns {JSX}
 */
 function Signup({className, signupFormSubmit, children, handleSubmit}) {
  return (
     <div className={className}>
      <header>
        <h1>Create Account</h1>
      </header>
      <form onSubmit={handleSubmit(signupFormSubmit)}>
        <Field name="firstName" component={renderField} type="text" placeholder="First name"/>
        <Field name="lastName" component={renderField} type="text" placeholder="Last name"/>
        <Field name="email" component={renderField} type="email" placeholder="Email or Mobile number"/>
        <Field name="password" component={renderField} type="password" placeholder="Enter min 6 characters"/>
        <button name="submit" type="submit">Create Account</button>
      </form>
     </div>
   );
 }

 Signup.propTypes = {
   className: PropTypes.string,
   signupOnSubmit: PropTypes.func
 };

 const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
   return (
     <div>
       <label>{label}</label>
       <div>
         <input {...input} placeholder={label} type={type}/>
         {touched && error && <span>{error}</span>}
       </div>
     </div>
   );
 };

 const validate = values => {
   const errors = {};

   if(!values.firstName) {
     errors.firstName = 'Required';
   } else if(values.firstName.length < 4) {
     errors.firstName = 'Min 5 required';
   } else if(!values.lastName) {
     errors.lastName = 'Required';
   } else if(!values.email) {
     errors.email = 'Required';
   } else if(!values.password) {
     errors.password = 'Required';
   }
   console.log(errors);
   return errors;
 };

export default reduxForm({
   form: 'signUp',
   fields: ['firstName', 'lastName', 'email', 'password'],
   validate
 })(Signup);

import React, { PropTypes } from "react";

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
        <button name="submit" type="submit">Create Account</button>
      </form>
      {children}
     </div>
   );
 }

 Signup.propTypes = {
   className: PropTypes.string,
   signupOnSubmit: PropTypes.func,
   children: PropTypes.object
 };

 export default Signup;

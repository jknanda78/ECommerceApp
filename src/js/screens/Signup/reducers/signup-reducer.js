const signupState = {
  className: "signup",
  userName: "jyoti"
};

/**
 * `state` for signup
 * @param {Object} state
 * @param {Action} action
 * @return {Object}
 */
export default function(state = signupState, action) {
  console.log("action.type", action.type);
  switch (action.type) {
    case "SIGNUP_FORM_SUBMIT":
      //do something
      // state = Object.assign({}, state, {userName: "jyoti nanda"});
      return {
        ...state
      };
    default:
      return state;
  }
}

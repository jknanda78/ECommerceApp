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
      console.log("SIGNUP_FORM_SUBMIT", arguments);
      // state = Object.assign({}, state, {userName: "jyoti nanda"});
      return {
        ...state
      };
    case "SUCCESSFUL_SIGNUP":
      //do something
      state = Object.assign({}, state, {userName: action.response.user});
      return {
        ...state
      };
    default:
      return state;
  }
}

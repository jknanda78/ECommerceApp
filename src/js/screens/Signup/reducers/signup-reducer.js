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
  switch (action.type) {
    case "SIGNUP_FORM_SUBMIT":
      //do something
      state = Object.assign({}, state, {test: "nanda"});
      return {
        ...state
      };

    default:
      return state;
  }
}

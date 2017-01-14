export const userState = {
  loggedin: false,
  name: '',
  language: 'en'
};

/**
 * `state` for signup
 * @param {Object} state
 * @param {Action} action
 * @return {Object}
 */
export default function(state = userState, action) {
  switch (action.type) {
    case "SUCCESSFUL_SIGNUP":
    console.log("SUCCESSFUL_SIGNUP", action);
      //do something{userName: action.response.user}
      state = Object.assign({}, state, {loggedin: true, name: action.response.user});
      return {
        ...state
      };

    case "SIGNUP_FAILURE":
    console.log("SIGNUP_FAILURE");
      //do something
      return {
        ...state
      };
    default:
      return state;
  }
}

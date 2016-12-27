import bowser from "bowser";

const browserInfo = {
  name: '',
  version: ''
};

/**
 * `state` for signup
 * @param {Object} state
 * @param {Action} action
 * @return {Object}
 */
export default function(state = browserInfo, action) {
  switch (action.type) {
    case "APPLICATION_ONLOAD":
      //do something
      state = Object.assign({}, state, {name: bowser.name, version: bowser.version});
      return {
        ...state
      };

    default:
      return state;
  }
}

import {combineReducers} from "redux";
import signupReducer from "./signup-reducer";
import userReducer from "./user-reducer";

export default combineReducers({
  signupReducer,
  userReducer
});

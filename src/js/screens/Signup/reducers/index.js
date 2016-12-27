import {combineReducers} from "redux";
import browserInfoReducer from "../../../reducers/browserinfo-reducer";
import signupReducer from "./signup-reducer";
import userReducer from "./user-reducer";

export default combineReducers({
  signupReducer,
  userReducer,
  browserInfoReducer
});

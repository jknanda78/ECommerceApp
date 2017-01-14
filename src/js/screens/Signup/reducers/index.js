import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import browserInfoReducer from "../../../reducers/browserinfo-reducer";
import signupReducer from "./signup-reducer";
import userReducer from "./user-reducer";

export default combineReducers({
  form: formReducer,
  signupReducer,
  userReducer,
  browserInfoReducer
});

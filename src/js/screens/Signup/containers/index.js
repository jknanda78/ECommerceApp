import {connect} from 'react-redux';
import Signup from '../components/signup';
import {submitSignupForm} from "../actions";
import {sucessfulSignup} from "../../Login/actions"

/**
 * @param {Function} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
  signupOnSubmit: e => {
    e.preventDefault();
    console.log("trigger submitSignupForm");
    // dispatch(submitSignupForm(dispatch));
    dispatch(submitSignupForm());
  }
});

/**
 * @param {Object} state
 * @param {Object} props
 * @return {Object}
 */
const mapStateToProps = (state, props) => ({
  ...props,
  className: state.signupReducer.className,
  browserName: state.browserInfoReducer.name,
  browserVersion: state.browserInfoReducer.version
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

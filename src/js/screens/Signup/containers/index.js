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
    dispatch(submitSignupForm(e));
  }
});

/**
 * @param {Object} state
 * @param {Object} props
 * @return {Object}
 */
const mapStateToProps = (state, props) => ({
  ...props,
  className: state.className
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

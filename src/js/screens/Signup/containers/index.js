import {connect} from 'react-redux';
import signupForm from '../components/signup';
import {submitSignupForm} from "../actions";

/**
 * @param {Function} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
  signupFormSubmit: (data) => {
    dispatch(submitSignupForm(data));
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

export default connect(mapStateToProps, mapDispatchToProps)(signupForm);

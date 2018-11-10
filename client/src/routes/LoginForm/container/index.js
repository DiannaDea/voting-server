import connect from 'react-redux/es/connect/connect';
import LoginForm from '../components';
import { signInInit, getUserInit } from '../modules/actions';

const mapStateToProps = state => ({
  token: state.user.fetchData.token,
});

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInInit(payload)),
  getUser: payload => dispatch(getUserInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

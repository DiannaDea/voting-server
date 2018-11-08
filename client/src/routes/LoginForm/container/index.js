import connect from 'react-redux/es/connect/connect';
import LoginForm from '../components';
import { signInInit } from '../modules/actions';

const mapStateToProps = state => ({
  token: state.user.fetchData.token,
});

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

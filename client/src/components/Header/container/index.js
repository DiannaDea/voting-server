import connect from 'react-redux/es/connect/connect';
import Header from '../components';
import { signOut } from '../../../routes/LoginForm/modules/actions';

const mapStateToProps = state => ({
  token: state.user.fetchData.token,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

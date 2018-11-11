import connect from 'react-redux/es/connect/connect';
import CreateGroupForm from '../components';
import { createGroupInit } from '../modules/actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createGroup: payload => dispatch(createGroupInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupForm);

import connect from 'react-redux/es/connect/connect';
import CreateGroupForm from '../components';
import { createGroupInit } from '../modules/actions';

const mapStateToProps = state => ({
  groupId: (state.groups.fetchData.lastGroup)
    ? state.groups.fetchData.lastGroup._id
    : null,
});

const mapDispatchToProps = dispatch => ({
  createGroup: payload => dispatch(createGroupInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupForm);

import { connect } from 'react-redux';
import GroupSideBar from '../components';
import { getUserGroupsInit, changeCurrentGroup } from '../modules/actions';

const mapStateToProps = state => ({
  groups: state.groups.fetchData.all,
  curGroupId: state.groups.fetchData.curGroupId,
  userId: '5bc8a8649c3d232278530a48',
});

const mapDispatchToProps = dispatch => ({
  getUserGroups: payload => dispatch(getUserGroupsInit(payload)),
  changeCurrentGroup: payload => dispatch(changeCurrentGroup(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSideBar);

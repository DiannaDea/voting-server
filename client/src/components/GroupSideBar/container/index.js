import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import GroupSideBar from '../components';
import { getUserGroupsInit, changeCurrentGroup } from '../modules/actions';

const mapStateToProps = state => ({
  groups: state.groups.fetchData.all,
  curGroupId: state.groups.fetchData.curGroupId,
  userId: state.user.fetchData.personalInfo._id,
});

const mapDispatchToProps = dispatch => ({
  getUserGroups: payload => dispatch(getUserGroupsInit(payload)),
  changeCurrentGroup: payload => dispatch(changeCurrentGroup(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupSideBar));

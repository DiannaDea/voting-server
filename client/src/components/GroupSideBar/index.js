import { connect } from 'react-redux';
import GroupSideBar from './components';
import { getUserGroupsInit, changeCurrentGroup } from './utils/actions';

const mapStateToProps = state => ({
    groups: state.groups.data.all,
    curGroupId: state.groups.data.curGroupId,
});

const mapDispatchToProps = dispatch => ({
    getUserGroups: () => dispatch(getUserGroupsInit()),
    changeCurrentGroup: newGroupId => dispatch(changeCurrentGroup(newGroupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSideBar);

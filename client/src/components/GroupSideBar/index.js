import { connect } from 'react-redux';
import GroupSideBar from './components';
import { getUserGroupsInit } from './utils/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    getUserGroups: () => dispatch(getUserGroupsInit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSideBar);

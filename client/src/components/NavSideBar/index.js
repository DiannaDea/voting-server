import { connect } from 'react-redux';
import NavSideBar from './components';
import { getNewVotingsInit, getRecentVotingsInit } from './utils/actions';

const mapStateToProps = state => ({
    curGroupId: state.groups.data.curGroupId,
    userId: '5bc8a8599c3d232278530a47',
    votingsNew: state.votings.data.new,
    votingsRecent: state.votings.data.recent,
});

const mapDispatchToProps = dispatch => ({
    getNewVotings: (userId, groupId) => dispatch(getNewVotingsInit(userId, groupId)),
    getRecentVotings: (userId, groupId) => dispatch(getRecentVotingsInit(userId, groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavSideBar);

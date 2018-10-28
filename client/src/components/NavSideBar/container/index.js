import { connect } from 'react-redux';
import NavSideBar from '../components';
import { getNewVotingsInit, getRecentVotingsInit } from '../modules/actions';

const mapStateToProps = state => ({
  curGroupId: state.groups.fetchData.curGroupId,
  userId: '5bc8a8599c3d232278530a47',
  votingsNew: state.votings.fetchData.new,
  votingsRecent: state.votings.fetchData.recent,
  groups: state.groups.fetchData.all || [],
});

const mapDispatchToProps = dispatch => ({
  getNewVotings: payload => dispatch(getNewVotingsInit(payload)),
  getRecentVotings: payload => dispatch(getRecentVotingsInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavSideBar);

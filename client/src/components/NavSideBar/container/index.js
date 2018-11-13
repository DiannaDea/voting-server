import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavSideBar from '../components';
import { getNewVotingsInit, getRecentVotingsInit } from '../modules/actions';

const mapStateToProps = state => ({
  curGroupId: state.groups.fetchData.curGroupId,
  userId: state.user.fetchData.personalInfo._id,
  votingsNew: state.votings.fetchData.new,
  votingsRecent: state.votings.fetchData.recent,
  groups: state.groups.fetchData.all || [],
});

const mapDispatchToProps = dispatch => ({
  getNewVotings: payload => dispatch(getNewVotingsInit(payload)),
  getRecentVotings: payload => dispatch(getRecentVotingsInit(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSideBar));

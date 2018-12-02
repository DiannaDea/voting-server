import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ActivityContainer from '../components';
import { getAuthStatInit, getVoteStatInit } from '../modules/actions';

const mapStateToProps = state => ({
  email: state.user.fetchData.personalInfo.email,
  languageText: state.language.text.activity,
  userId: state.user.fetchData.personalInfo._id,
  authActivity: state.userActivity.auth,
  votesActivity: state.userActivity.votes,
});

const mapDispatchToProps = dispatch => ({
  getVoteStat: payload => dispatch(getVoteStatInit(payload)),
  getAuthStat: payload => dispatch(getAuthStatInit(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityContainer));

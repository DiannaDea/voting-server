import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import VotingsList from '../components';

import { getVotingResultsInit } from '../modules/actions';

const mapStateToProps = state => ({
  votingsNew: state.votings.fetchData.new,
  votingsRecent: state.votings.fetchData.recent,
  votingResults: state.votingResults.results,
  languageText: state.language.text.listVotings,
});

const mapDispatchToProps = dispatch => ({
  getResults: payload => dispatch(getVotingResultsInit(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VotingsList));

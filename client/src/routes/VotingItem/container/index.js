import connect from 'react-redux/es/connect/connect';
import VotingItem from '../components';

import {
  getOneVotingInit,
  getVotingCandidatesInit,
  sendVoteInit,
  checkUserCanVoteInit,
} from '../modules/actions';

const mapStateToProps = state => ({
  firstName: state.user.fetchData.personalInfo.firstName,
  lastName: state.user.fetchData.personalInfo.lastName,
  voting: state.votings.fetchData.lastVoting.data,
  candidates: state.votings.fetchData.lastVoting.candidates,
  userId: state.user.fetchData.personalInfo._id,
  languageText: state.language.text.votingItem,
  userVoted: state.votings.fetchData.lastVoting.userVoted,
});

const mapDispatchToProps = dispatch => ({
  getOneVoting: payload => dispatch(getOneVotingInit(payload)),
  getVotingCandidates: payload => dispatch(getVotingCandidatesInit(payload)),
  sendVote: payload => dispatch(sendVoteInit(payload)),
  checkUserCanVote: payload => dispatch(checkUserCanVoteInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VotingItem);

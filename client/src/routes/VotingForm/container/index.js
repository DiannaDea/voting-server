import connect from 'react-redux/es/connect/connect';
import VotingForm from '../components';
import { addVotingInit, addCandidatesInit } from '../modules/actions';

const mapStateToProps = state => ({
  groupId: state.groups.fetchData.curGroupId,
  userId: state.user.fetchData.personalInfo._id,
  lastVoting: state.votings.fetchData.lastVoting,
});

const mapDispatchToProps = dispatch => ({
  createVoting: payload => dispatch(addVotingInit(payload)),
  addCandidate: payload => dispatch(addCandidatesInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VotingForm);

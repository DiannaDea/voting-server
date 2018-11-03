import connect from 'react-redux/es/connect/connect';
import VotingItem from '../components';
import { getOneVotingInit, getVotingCandidatesInit } from '../modules/actions';

const mapStateToProps = state => ({
  userName: 'Diana Baburina',
  voting: state.votings.fetchData.lastVoting.data,
  candidates: state.votings.fetchData.lastVoting.candidates,
});

const mapDispatchToProps = dispatch => ({
  getOneVoting: payload => dispatch(getOneVotingInit(payload)),
  getVotingCandidates: payload => dispatch(getVotingCandidatesInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VotingItem);

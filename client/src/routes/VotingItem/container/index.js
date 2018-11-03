import connect from 'react-redux/es/connect/connect';
import VotingItem from '../components';
import { getOneVotingInit } from '../modules/actions';

const mapStateToProps = state => ({
  userName: 'Diana Baburina',
  voting: state.votings.fetchData.lastVoting,
});

const mapDispatchToProps = dispatch => ({
  getOneVoting: payload => dispatch(getOneVotingInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VotingItem);

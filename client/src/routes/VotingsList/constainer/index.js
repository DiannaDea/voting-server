import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import VotingsList from '../components';

const mapStateToProps = state => ({
  votingsNew: state.votings.fetchData.new,
  votingsRecent: state.votings.fetchData.recent,
});

const mapDispatchToProps = () => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VotingsList));

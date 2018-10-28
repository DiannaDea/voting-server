import connect from 'react-redux/es/connect/connect';
import VotingItem from '../components';
import { getOneVotingInit } from '../modules/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  getOneVotingInit: payload => dispatch(getOneVotingInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VotingItem);

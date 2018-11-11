import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import Button from '@material-ui/core/Button';
import CandidatesContainer from './CandidatesContainer';
import CoefficientsContainer from './CoefficientsContainer';
import VoteModal from './VoteModal';

const VotingInput = styled(TextField)`
   margin: 20px 15px !important;
   width: 40%;
`;

const VotingInputGroup = styled.div`
  width: 100%;
`;

const InformationGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const VotingBadge = styled.div`
    width: ${props => (props.isStatus ? '15%' : '25%')};
    background-color: #bdbdbd;
    text-align: center;
    padding: 3px;
    border-radius: 50px;
`;

const VotingInfoGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;

const VotingRow = styled.div`
    margin: 20px 0;
`;

class VotingItem extends Component {
  state = {
    isVoteModalOpen: false,
  };

  componentDidMount() {
    const { match, getOneVoting } = this.props;
    const { id } = match.params;

    getOneVoting({ id });
  }

  componentDidUpdate(prevProps) {
    const {
      match, voting, getVotingCandidates, getOneVoting,
    } = this.props;
    const { id } = match.params;

    if (id && id !== prevProps.match.params.id) {
      getOneVoting({ id });
    }
    if (voting && prevProps.voting !== voting) {
      getVotingCandidates({
        votingId: voting._id,
      });
    }
  }

  blockChangeInputs = (event) => {
    event.preventDefault();
  };

  toggleVoteModal(open) {
    this.setState({
      isVoteModalOpen: open,
    });
  }

  render() {
    const {
      voting, candidates, userName, sendVote, userId,
    } = this.props;
    const { isVoteModalOpen } = this.state;

    const votingForm = (voting) ? (
      <Fragment>
        <VotingInfoGroup>
          <VotingBadge>{userName}</VotingBadge>
          <VotingBadge isStatus>{voting.status}</VotingBadge>
          <Button
            variant='contained'
            color='primary'
            onClick={() => this.toggleVoteModal(true)}
          >
          Vote
          </Button>
        </VotingInfoGroup>
        <VotingRow>
          <VotingInputGroup>
            <VotingInput
              label='Topic'
              value={voting.topic}
              onChange={this.blockChangeInputs}
            />
          </VotingInputGroup>
          <VotingInputGroup>
            <VotingInput
              label='Date start'
              value={dateFormat(voting.dateStart, 'mmmm dS, yyyy, h:MM:ss')}
              onChange={this.blockChangeInputs}
            />
            <VotingInput
              label='Date end'
              value={dateFormat(voting.dateEnd, 'mmmm dS, yyyy, h:MM:ss')}
              onChange={this.blockChangeInputs}
            />
          </VotingInputGroup>
          <VotingInputGroup>
            <VotingInput
              label='Voters percent'
              value={`${voting.votersPercent} %`}
              onChange={this.blockChangeInputs}
            />
          </VotingInputGroup>
        </VotingRow>
        <InformationGroup>
          {
            (candidates && candidates.length) ? (
              <CandidatesContainer candidates={candidates} />
            ) : null
          }
          {
            (voting.coefficients && voting.coefficients.length) ? (
              <CoefficientsContainer coefficients={voting.coefficients} />
            ) : null
          }
        </InformationGroup>
      </Fragment>
    ) : null;

    return (
      <Fragment>
        {votingForm}
        <VoteModal
          votingId={(voting) ? voting._id : ''}
          userId={userId}
          sendVote={sendVote}
          candidates={candidates}
          coefficients={(voting) ? voting.coefficients : []}
          open={isVoteModalOpen}
          handleClose={() => this.toggleVoteModal(false)}
        />
      </Fragment>
    );
  }
}

export default VotingItem;

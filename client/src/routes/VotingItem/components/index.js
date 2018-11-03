import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import CandidatesContainer from './CandidatesContainer';
import CoefficientsContainer from './CoefficientsContainer';

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

class VotingItem extends Component {
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

  render() {
    const { voting, candidates } = this.props;

    const votingForm = (voting) ? (
      <Fragment>
          <VotingInputGroup>
        <VotingInput
          label='Topic'
          value={voting.topic}
        />
          </VotingInputGroup>
        <VotingInputGroup>
          <VotingInput
            label='Date start'
            value={dateFormat(voting.dateStart, 'mmmm dS, yyyy, h:MM:ss')}
          />
          <VotingInput
            label='Date end'
            value={dateFormat(voting.dateEnd, 'mmmm dS, yyyy, h:MM:ss')}
          />
        </VotingInputGroup>
          <VotingInputGroup>
        <VotingInput
          label='Voters percent'
          value={`${voting.votersPercent} %`}
        />
          </VotingInputGroup>
        <InformationGroup>
          <CandidatesContainer candidates={candidates} />
          <CandidatesContainer candidates={candidates} />
        </InformationGroup>
      </Fragment>
    ) : null;

    return (
      <Fragment>
        {votingForm}
      </Fragment>
    );
  }
}

export default VotingItem;

import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import dateFormat from 'dateformat';

const VotingInput = styled(TextField)`
   margin: 20px 15px !important;
   width: 40%;
`;

const VotingInputGroup = styled.div`
  width: 100%;
`;

class VotingItem extends Component {
  componentDidMount() {
    const { match, getOneVoting } = this.props;
    const { id } = match.params;

    getOneVoting({ id });
  }

  render() {
    const { voting } = this.props;

    const votingForm = (voting) ? (
      <Fragment>
        <VotingInput
          label='Topic'
          value={voting.topic}
        />
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
        <VotingInput
          label='Voters percent'
          value={`${voting.votersPercent} %`}
        />
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

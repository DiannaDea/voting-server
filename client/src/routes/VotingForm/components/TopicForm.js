import React, { Fragment } from 'react';

import { VotingInput, VotingInputGroup } from './styled';

const TopicForm = ({ onChange, voting, language, }) => (
  <Fragment>
    <VotingInputGroup>
      <VotingInput
        /*label={language.forms.topicForm.topic}*/
        value={voting.topic}
        onChange={onChange('topic')}
      />
    </VotingInputGroup>
    <VotingInputGroup>
      <VotingInput
        id='datetime-local'
        label='Voting start'
        type='datetime-local'
        InputLabelProps={{
          shrink: true,
        }}
        value={voting.dateStart}
        onChange={onChange('dateStart')}
      />
      <VotingInput
        id='datetime-local'
        label='Voting end'
        type='datetime-local'
        InputLabelProps={{
          shrink: true,
        }}
        value={voting.dateEnd}
        onChange={onChange('dateEnd')}
      />
    </VotingInputGroup>
    <VotingInputGroup>
      <VotingInput
        type='number'
        label='Voters percent'
        value={voting.votersPercent}
        onChange={onChange('votersPercent')}
      />
    </VotingInputGroup>
  </Fragment>
);

export default TopicForm;

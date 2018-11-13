import React, { Fragment } from 'react';

import { VotingInput, VotingInputGroup } from './styled';

const TopicForm = () => (
    <Fragment>
        <VotingInputGroup>
            <VotingInput
            label='Topic'
            />
        </VotingInputGroup>
        <VotingInputGroup>
            <VotingInput
                id="datetime-local"
                label="Voting start"
                type="datetime-local"
                InputLabelProps={{
                shrink: true,
            }}
            />
            <VotingInput
                id="datetime-local"
                label="Voting end"
                type="datetime-local"
                InputLabelProps={{
                shrink: true,
            }}
            />
        </VotingInputGroup>
        <VotingInputGroup>
            <VotingInput
            label='Voters percent'
            />
        </VotingInputGroup>
    </Fragment> 
);

export default TopicForm;
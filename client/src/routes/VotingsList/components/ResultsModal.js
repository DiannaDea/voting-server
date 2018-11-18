import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import { maxBy } from 'lodash';
import VoteCard from './VoteCard';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class ResultsModal extends Component {
  componentDidUpdate(prevProps) {
    const { votingId, open, getResults } = this.props;

    if (prevProps.votingId !== votingId && open) {
      getResults({ votingId });
    }
  }

  reorderResults = (cards) => {
    const maxCard = maxBy(cards, card => card.votesValue);
    const newArr = cards.filter(card => card.votesValue !== maxCard.votesValue);

    newArr.splice(Math.round(newArr.length / 2), 0, {
      ...maxCard,
      winner: true,
    });

    return newArr;
  }

  render() {
    const {
      open, handleClose, votingResults, languageText,
    } = this.props;
    const resultsOrdered = (Object.keys(votingResults).length)
      ? this.reorderResults(votingResults.results)
      : [];

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{languageText.resultsTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {
              (Object.keys(votingResults).length)
                ? (
                  <ResultsContainer>
                    {
                      resultsOrdered.map((result) => {
                        return (
                          <VoteCard
                            languageText={languageText}
                            key={result.candidate._id}
                            result={result}
                          />
                        );
                      })
                    }
                  </ResultsContainer>
                )
                : null
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color='primary'
          >
            {languageText.buttons.close}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ResultsModal;

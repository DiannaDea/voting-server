import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CandidateModal = ({ open, handleClose, candidate }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      {
        (candidate) ? (
          <Fragment>
            <DialogTitle id='alert-dialog-title'>{candidate.name}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                {candidate.description}
              </DialogContentText>
            </DialogContent>
          </Fragment>
        ) : null
      }
      <DialogActions>
        <Button
          onClick={handleClose}
          color='primary'
        >
            Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CandidateModal;

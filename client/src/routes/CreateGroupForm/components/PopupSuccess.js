import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PopupSuccess = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <Fragment>
        <DialogTitle id='alert-dialog-title'>Successfully created group!</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Check your email to finish creating group. Use link in email to sign up if you don't have account and to join your group!
          </DialogContentText>
        </DialogContent>
      </Fragment>
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

export default PopupSuccess;

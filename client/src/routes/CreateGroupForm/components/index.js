import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Chip from '@material-ui/core/Chip';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FaceIcon from '@material-ui/icons/Face';
import PopupSuccess from './PopupSuccess';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  addMemberControll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  memberInput: {
    width: '70%',
  },
});

class CreateGroupForm extends Component {
  state = {
    name: '',
    adminEmail: '',
    membersEmails: [],
    lastMember: '',
    successModalOpened: false,
    prevPropsGroupId: this.props.groupId,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.groupId !== state.prevPropsGroupId && !state.successModalOpened) {
      return {
        prevPropsGroupId: props.groupId,
        successModalOpened: true,
      };
    }
    return null;
  }

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  addMember = () => {
    const { lastMember, membersEmails } = this.state;

    if (lastMember !== '') {
      this.setState({
        membersEmails: [...membersEmails, lastMember],
        lastMember: '',
      });
    }
  };

  deleteMember = (email) => {
    const { membersEmails } = this.state;
    this.setState({
      membersEmails: [
        ...membersEmails.filter(el => el !== email)],
    });
  };

  createGroup = () => {
    const { createGroup } = this.props;
    const { name, adminEmail, membersEmails } = this.state;

    createGroup({ name, adminEmail, membersEmails });
  };

    handleClose = () => {
      this.setState({
        successModalOpened: false,
      });
    };

    render() {
      const { classes } = this.props;
      const {
        name, adminEmail, membersEmails, lastMember, successModalOpened,
      } = this.state;

      return (
        <Fragment>
          <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                        Create group
              </Typography>
              <form className={classes.form}>
                <FormControl margin='normal' required fullWidth>
                  <InputLabel htmlFor='name'>Group name</InputLabel>
                  <Input
                    id='name'
                    name='name'
                    autoFocus
                    value={name}
                    onChange={event => this.handleChange(event, 'name')}
                  />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                  <InputLabel htmlFor='adminEmail'>Admin email</InputLabel>
                  <Input
                    name='adminEmail'
                    id='adminEmail'
                    value={adminEmail}
                    onChange={event => this.handleChange(event, 'adminEmail')}
                  />
                </FormControl>
                <FormControl className={classes.addMemberControll} margin='normal' required fullWidth>
                  <InputLabel htmlFor='memberEmail'>Member email</InputLabel>
                  <Input
                    className={classes.memberInput}
                    name='memberEmail'
                    id='memberEmail'
                    value={lastMember}
                    onChange={event => this.handleChange(event, 'lastMember')}
                  />
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={this.addMember}
                  >
                                Add member
                  </Button>
                </FormControl>
                <Fragment>
                  {
                    membersEmails.map((email, index) => (
                      <Chip
                        avatar={(
                          <Avatar>
                            <FaceIcon />
                          </Avatar>
                        )}
                        key={index}
                        label={email}
                        className={classes.chip}
                        onDelete={() => this.deleteMember(email)}
                      />
                    ))
                  }
                </Fragment>
                <Button
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                  onClick={this.createGroup}
                >
                            Create
                </Button>
              </form>
            </Paper>
          </main>
          <PopupSuccess
            open={successModalOpened}
            handleClose={this.handleClose}
          />
        </Fragment>

      );
    }
}

export default withStyles(styles)(CreateGroupForm);

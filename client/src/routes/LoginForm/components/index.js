import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Redirect, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
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
});

class LoginForm extends Component {
    state = {
      email: '',
      password: '',
    };

    componentDidUpdate(prevProps) {
      const { token, getUser } = this.props;
      const { email } = this.state;

      if (token !== prevProps.token) {
        getUser({ email });
      }
    }

    handleChange = (event, field) => {
      this.setState({
        [field]: event.target.value,
      });
    };

    render() {
      const { signIn, classes } = this.props;
      const { email, password } = this.state;

      return (
        <Fragment>
          {
            (localStorage.getItem('token'))
              ? <Redirect to='/app' />
              : (
                <main className={classes.main}>
                  <CssBaseline />
                  <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                      <LockIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                     Sign in
                    </Typography>
                    <Typography component='p' variant='p'>
                      Want to create group?
                      <Link to='/create/group'> Create now!</Link>
                    </Typography>
                    <form className={classes.form}>
                      <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>Email Address</InputLabel>
                        <Input
                          id='email'
                          name='email'
                          autoFocus
                          value={email}
                          onChange={event => this.handleChange(event, 'email')}
                        />
                      </FormControl>
                      <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>Password</InputLabel>
                        <Input
                          name='password'
                          type='password'
                          id='password'
                          value={password}
                          onChange={event => this.handleChange(event, 'password')}
                        />
                      </FormControl>
                      <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        onClick={() => signIn({ email, password })}
                      >
                       Sign in
                      </Button>
                    </form>
                  </Paper>
                </main>
              )
          }

        </Fragment>
      );
    }
}

export default withStyles(styles)(LoginForm);

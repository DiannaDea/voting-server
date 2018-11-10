import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Redirect } from 'react-router-dom';

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
      const { signIn } = this.props;
      const { email, password } = this.state;

      return (
        <Fragment>
          {
            (localStorage.getItem('token'))
              ? <Redirect to='/app' />
              : (
                <Fragment>
                  <FormControl>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <Input
                      id='email'
                      value={email}
                      onChange={event => this.handleChange(event, 'email')}
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input
                      id='password'
                      value={password}
                      onChange={event => this.handleChange(event, 'password')}
                    />
                  </FormControl>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => signIn({ email, password })}
                  >
Login
</Button>
                </Fragment>
              )
          }

        </Fragment>
      );
    }
}

export default LoginForm;

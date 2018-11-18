import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logout from '@material-ui/icons/ExitToApp';
import ActivityIcon from '@material-ui/icons/QueryBuilder';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SelectLang from '../../SelectLang';

const ControllerPanel = styled.div`
    text-align: right;
`;

const HeaderContainer = styled(Toolbar)`
    display: flex ;
    flex-direction: row ;
    justify-content: space-between;
`;

const ButtonCreateVoting = styled(Button)`
    margin-right: 25px !important;
`;

// FIXME: fix token management

class Header extends Component {
    cleanToken = () => {
      const { signOut } = this.props;

      localStorage.removeItem('token');
      signOut();
    };

    render() {
      const { languageText } = this.props;

      return (
        <AppBar position='static'>
          <HeaderContainer>
            <Typography variant='h6' color='inherit' noWrap>
              <Link to='/'>VoteUp</Link>
            </Typography>
            <ControllerPanel>
              <ButtonCreateVoting variant='contained'>
                <Link to='/app/create/votings'>{languageText.createVoting}</Link>
              </ButtonCreateVoting>
              <IconButton title={languageText.activityTitle} color='inherit'>
                <ActivityIcon />
              </IconButton>
              <IconButton title={languageText.accountTitle} color='inherit'>
                <AccountCircle />
              </IconButton>
              <IconButton
                title={languageText.logoutTitle}
                color='inherit'
                onClick={this.cleanToken}
              >
                <Logout />
              </IconButton>
            </ControllerPanel>
          </HeaderContainer>
        </AppBar>
      );
    }
}

export default Header;

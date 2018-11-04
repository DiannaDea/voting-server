import React from 'react';
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

const Header = () => (
  <AppBar position='static'>
    <HeaderContainer>
      <Typography variant='h6' color='inherit' noWrap>
        <Link to='/'>VoteUp</Link>
      </Typography>
      <ControllerPanel>
        <ButtonCreateVoting variant='contained'>
                    Create voting
        </ButtonCreateVoting>
        <IconButton color='inherit'>
          <ActivityIcon />
        </IconButton>
        <IconButton color='inherit'>
          <AccountCircle />
        </IconButton>
        <IconButton color='inherit'>
          <Logout />
        </IconButton>
      </ControllerPanel>
    </HeaderContainer>
  </AppBar>
);

export default Header;

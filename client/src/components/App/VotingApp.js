import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import GroupSideBar from '../GroupSideBar';
import NavSideBar from '../NavSideBar';
import Header from '../Header';
import { router, bodyRoutes } from '../../router';
import {
  SideBar,
  HeaderContainer,
  RootBody,
  RootContainer,
} from './styled';

const VotingApp = () => {
  return (
    <Fragment>
      {
        (!localStorage.getItem('token'))
          ? (<Redirect to='/login' />)
          : (
            <Grid container spacing={0}>
              <SideBar item md={1} style={{ backgroundColor: 'gray' }}>
                <GroupSideBar />
              </SideBar>
              <SideBar item md={3} style={{ backgroundColor: '#c1c1c1' }}>
                <NavSideBar />
              </SideBar>
              <SideBar item md={8}>
                <Grid container direction='column' style={{ width: '100%' }}>
                  <HeaderContainer item md={12}>
                    <Header />
                  </HeaderContainer>
                  <RootBody item md={12}>
                    <RootContainer>
                      {router(bodyRoutes)}
                    </RootContainer>
                  </RootBody>
                </Grid>
              </SideBar>
            </Grid>
          )
      }
    </Fragment>
  );
};

const mapStateToProps = state => ({
  token: state.user.fetchData.token,
});

export default connect(mapStateToProps, () => ({}))(VotingApp);

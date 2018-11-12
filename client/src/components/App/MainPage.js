import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

const MainPage = () => (
  <Fragment>
    {
      (localStorage.getItem('token'))
        ? <Redirect to='/app' />
        : <Redirect to='/login' />
    }
  </Fragment>
);

export default MainPage;

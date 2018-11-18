import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { NotificationContainer } from 'react-notifications';
import { router, mainRoutes } from '../../router';

const history = createHistory();

const App = () => (
  <Fragment>
    <NotificationContainer />
    <Router history={history}>
      {router(mainRoutes)}
    </Router>
  </Fragment>
);

export default App;

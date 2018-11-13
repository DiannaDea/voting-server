import React from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { router, mainRoutes } from '../../router';

const history = createHistory();

const App = () => (
  <Router history={history}>
    {router(mainRoutes)}
  </Router>
);

export default App;

import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Tacos from './routes/Tacos';
import VotingItem from './routes/VotingItem';
import VotingForm from './routes/VotingForm';
import VotingApp from './components/App/VotingApp';
import MainApp from './components/App/MainPage';
import LoginForm from './routes/LoginForm';
import CreateGroupForm from './routes/CreateGroupForm';
import SignUp from './routes/SignUp';
import VotingsList from './routes/VotingsList';

// FIXME: refactor create voting route url
export const bodyRoutes = [
  {
    path: '/app',
    exact: true,
    component: Tacos,
  },
  {
    path: '/app/create/votings',
    component: VotingForm,
  },
  {
    path: '/app/votings/:id',
    component: VotingItem,
  },
  {
    path: '/app/votings/list',
    component: VotingsList,
  },
];

export const mainRoutes = [
  {
    path: '/',
    exact: true,
    component: MainApp,
  },
  {
    path: '/app',
    component: VotingApp,
  },
  {
    path: '/login',
    component: LoginForm,
  },
  {
    path: '/auth/signup',
    component: SignUp,
  },
  {
    path: '/create/group',
    component: CreateGroupForm,
  },
];

export const router = (routes) => {
  return (
    <Fragment>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={(route.exact)}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))}
    </Fragment>
  );
};

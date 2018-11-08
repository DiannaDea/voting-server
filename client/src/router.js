import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Tacos from './routes/Tacos';
import VotingItem from './routes/VotingItem';
import VotingForm from './routes/VotingForm';

//FIXME: refactor create voting route url
const routes = [
  {
    path: '/',
    exact: true,
    component: Tacos,
  },
  {
    path: '/create/votings',
    component: VotingForm,
  },
  {
    path: '/votings/:id',
    component: VotingItem,
  },
];

export default function router() {
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
}

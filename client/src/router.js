import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter, Route } from 'react-router-dom';

import Tacos from './components/Tacos';

const history = createHistory();
const TestRoute = () => <h1>Test</h1>;

const routes = [
    {
        path: '/',
        exact: true,
        component: Tacos
    },
    {
        path: '/test',
        component: TestRoute
    }
];

export default function router() {
    return (
        <BrowserRouter history={history}>
            <div>
                {routes.map(route => (
                    <Route
                        path={route.path}
                        exact={(route.exact)}
                        render={props => (
                            <route.component {...props} routes={route.routes} />
                        )}
                    />
                ))}
            </div>
        </BrowserRouter>
    );
}

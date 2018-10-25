import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

const appWithStore = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(appWithStore, document.getElementById('root'));

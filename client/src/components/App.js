import React from 'react';
import GroupSideBar from './GroupSideBar';
import NavSideBar from './NavSideBar';
import router from '../router';

const App = () => (
    <React.Fragment>
        <GroupSideBar />
        <NavSideBar />
        {router()}
    </React.Fragment>
);

export default App;

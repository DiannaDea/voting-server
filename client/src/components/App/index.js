import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import GroupSideBar from '../GroupSideBar/index';
import NavSideBar from '../../components/NavSideBar';
import router from '../../router';
import styles from './styles';

const Header = () => <h1>Header</h1>;

const App = ({ classes }) => (
    <Grid container spacing={0}>
        <Grid item md={1} className={classes.sideBar} style={{ backgroundColor: 'gray' }}>
            <GroupSideBar />
        </Grid>
        <Grid item md={3} className={classes.sideBar} style={{ backgroundColor: '#c1c1c1' }}>
            <NavSideBar />
        </Grid>
        <Grid item md={8} className={classes.sideBar}>
            <Grid container direction='column'>
                <Grid item md={12} className={classes.header}>
                    <Header />
                </Grid>
                <Grid item md={12} className={classes.rootContainer}>
                    {router()}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default withStyles(styles)(App);

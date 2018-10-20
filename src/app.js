import Koa from 'koa';
import respond from 'koa-respond';
import passport from 'koa-passport';
import logger from 'koa-logger';

import connectToDb from './services/dbConnection';
import VotingCron from './services/votingCron';
import routes from './routes';
import './services/passport';

const votingCron = new VotingCron();

connectToDb();

const app = new Koa();

app.use(respond());
app.use(logger());
app.use(passport.initialize());

votingCron.startVoting();
votingCron.endVoting();

routes.forEach(route => app.use(route));

export default app;

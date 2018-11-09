import Koa from 'koa';
import respond from 'koa-respond';
import passport from 'koa-passport';
import logger from 'koa-logger';
import koaStatic from 'koa-static';
import path from 'path';
import cors from '@koa/cors';
import send from 'koa-send';

import connectToDb from './services/dbConnection';
import VotingCron from './services/votingCron';
import routes from './routes';
import './services/passport';

const votingCron = new VotingCron();

connectToDb();

const app = new Koa();

app.use(cors());
app.use(koaStatic(path.resolve(__dirname, '../client/build')));
app.use(respond());
app.use(logger());
app.use(passport.initialize());

votingCron.startVoting();
votingCron.endVoting();

routes.forEach(route => app.use(route));

app.use('/*', async (ctx) => {
    await send(ctx, path.resolve(__dirname, '../client/build/index.html'));
});

export default app;

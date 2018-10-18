import Koa from 'koa';
import dotenv from 'dotenv';
import respond from 'koa-respond';
import passport from 'koa-passport';
import logger from 'koa-logger';

import connectToDb from './services/dbConnection';
import routes from './routes';
import './services/passport';

dotenv.config();
connectToDb();

const app = new Koa();

// app.use(bodyParser());
app.use(respond());
app.use(logger());
app.use(passport.initialize());

routes.forEach(route => app.use(route));

export default app;

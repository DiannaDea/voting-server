import Koa from 'koa';
import dotenv from 'dotenv';
import respond from 'koa-respond';

import connectToDb from './services/dbConnection';
import routes from './routes';
import './services/passport';

dotenv.config();
connectToDb();

const app = new Koa();

// app.use(bodyParser());
app.use(respond());

routes.forEach(route => app.use(route));

export default app;

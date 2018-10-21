import http from 'http';
import config from 'config';

import app from './app';

const port = config.app.port;

http.createServer(app.callback()).listen(port);

console.log(`Server running on port ${port}`);

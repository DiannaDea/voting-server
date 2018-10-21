import http from 'http';
import config from 'config';

import app from './app';

http.createServer(app.callback()).listen(process.env.PORT || config.app.port);

console.log('Server running on port 5000');

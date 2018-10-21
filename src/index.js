import http from 'http';
import config from 'config';

import app from './app';

console.log(process.env.PORT, config);

http.createServer(app.callback()).listen(process.env.PORT || config.app.port);

console.log('Server running on port 5000');

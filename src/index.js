import http from 'http';
import app from './app';

http.createServer(app.callback()).listen(process.env.PORT);

console.log('Server running on port 5000');

const http = require ('http');
const app = require('./app');

const port = process.env.port || 4000;

const server = http.createServer(app);

server.listen(port);
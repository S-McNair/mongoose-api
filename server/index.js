const server = require('./app');

const port = process.env.port || 8080;

server.listen(port, function() {
    console.log('express server is listening on http://localhost:' + port);
});
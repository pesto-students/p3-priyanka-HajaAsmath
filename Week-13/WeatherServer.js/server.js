const http = require('http');
const controller = require('./controller')

const server = http.createServer(function(req, res) {
    controller.handleRequest(req, res);
});

server.listen(9000);

console.log('Node server is listening on port 9000...')
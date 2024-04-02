var http = require('http');
const PORT = process.env.PORT || 81;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! Updated secret keys');
}).listen(PORT);

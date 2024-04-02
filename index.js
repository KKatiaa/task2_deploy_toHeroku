var http = require('http');
const PORT = process.env.PORT || 80;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! Added changes');
}).listen(PORT);

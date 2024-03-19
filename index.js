var http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! Hello World! Hello World!');
}).listen(PORT);
var connect = require('connect');
var http = require('http');
var app = connect().use(connect.favicon()).use(connect.logger()).use(function (req, res) {
	res.end('Hello world\n');
});
http.createServer(app).listen(8124);
console.log('Server run on port 8124');
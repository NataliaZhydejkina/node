var http = require('http')
	, path = require('path')
	, fs = require('fs')
	, base = '/node';
http.createServer(function (req, res) {
	var pathname = base + req.url;
	console.log(pathname);
	fs.exists(pathname, function (exists) {
		if (exists) {
			res.statusCode = 200;
			var file = fs.createReadStream(pathname);
			file.on('open', function () {
				file.pipe(res);
			});
			file.on('error', function (err) {
				console.log(err);
			});
		}
		else {
			res.writeHead(404);
			res.write('Bad request 404\n');
			res.end();
		}
	});
}).listen(8124);
console.log('Server running at 8124');
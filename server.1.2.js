var http = require('http')
	, fs = require('fs');
http.createServer(function (req, res) {
	fs.readFile('server1.6.js', 'utf8', function (err, data) {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		if (err) res.write('Could not find or open file for reading');
		else res.write(data);
		res.end();
	});
}).listen(8080, function () {
	console.log('bound to port 8080');
});
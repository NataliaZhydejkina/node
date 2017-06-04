var http = require('http')
	, fs = require('fs');

function writeNumbers(res) {
	var counter = 0;
	for (var i = 0; i < 100; i++) {
		counter++;
		res.write(counter.toString() + '\n');
	}
}
http.createServer(function (req, res) {
	var query = require('url').parse(req.url).query;
	console.log(query, "query");
	var app = require('querystring').parse(query).file + ".txt";
	console.log(app, "app");
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	writeNumbers(res);
	setTimeout(function () {
		fs.readFile(app, 'utf8', function (err, data) {
			if (err) {
				res.write('Could not find or open file for reading\n');
				console.error(err);
			}
			else {
				console.log(data, "data");
				res.write(data);
			}
		})
		console.log('end');
	}, 2000);
}).listen(8124);
console.log('Server running at 8124');
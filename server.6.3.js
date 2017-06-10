var connect = require('connect')
	, http = require('http')
	, fs = require('fs')
	, _dirname = '/node';
console.log(_dirname + '/index.html');
var writeStream = fs.createWriteStream('./log.txt', {
	'flags': 'a'
	, 'encoding': 'utf8'
	, 'mode': 0666
});
http.createServer(connect().use(connect.logger({
	format: 'dev'
})).use(connect.cookieParser()).use(function (req, res, next) {
	console.log('traking: ' + req.cookie.username);
}).use(connect.static(_dirname + '/index.html'), {
	redirect: true
})).listen(8124);
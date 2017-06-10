var dns = require('dns');
dns.lookup('burningbird.net', function (err, ip) {
	if (err) throw err;
	console.log(ip);
});
dns.reverse('173.255.206.103', function (err, domains) {
	domains.forEach(function (domain) {
		console.log(domain);
	});
});
var url = require('url');
var urlObj = url.parse('http://examples.burningbird.net:8124/?file=main');
console.log(urlObj);
console.log(url.format(urlObj));
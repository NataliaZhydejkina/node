/*var spawn = require('child_process').spawn
	, pwd = spawn('pwd');
pwd.stdout.on('data', function (data) {
	console.log('stdout: ' + data);
});
pwd.stderr.on('data', function (data) {
	console.log('stderr: ' + data);
});
pwd.on('exit', function (code) {
	console.log('child process exited with code ' + code);
});*/
var cmd = require('child_process').spawn('cmd', ['/c', 'dir\n']);
cmd.stdout.on('data', function (data) {
	console.log('stdout: ' + data);
});
cmd.stderr.on('data', function (data) {
	console.log('stderr: ' + data);
});
cmd.on('exit', function (code) {
	console.log('child process exited with code ' + code);
});
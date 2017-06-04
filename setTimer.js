function on_OpenAndReadFile(filename, res) {
	console.log("open: " + filename);
	fs.readFile(filename, 'utf8', function (err, data) {
		if (err) {
			res.write(data);
		}
		else {
			res.write(data);
		}
		res.end();
	});
	setTimeout(openAndReadFile, 2000, filename, res);
}
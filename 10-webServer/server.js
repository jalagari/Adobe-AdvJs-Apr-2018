var http = require('http'),
	fs = require('fs'),
	path = require('path');

var server = http.createServer(function(req, res){
	var resource = req.url === '/' ? 'index.html' : req.url;
	var resourcePath = path.join(__dirname, resource);

	if (!fs.existsSync(resourcePath)){
		res.statusCode = 404;
		res.end();
		return;
	}

	var stream = fs.createReadStream(resourcePath);
	stream.pipe(res);
});

server.listen(9090);
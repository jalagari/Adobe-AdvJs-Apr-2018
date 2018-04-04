var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.xml', '.json'];

function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req, res){
	var resource = req.url === '/' ? 'index.html' : req.url;
	var urlObj = url.parse(resource);

	if (isStatic(urlObj.pathname)){
		var resourcePath = path.join(__dirname, urlObj.pathname);

		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resourcePath);
		stream.pipe(res);
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var data = querystring.parse(urlObj.query);
		var op = data.op,
			n1 = parseInt(data.n1),
			n2 = parseInt(data.n2),
			result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			var data = querystring.parse(rawData);
			var op = data.op,
				n1 = parseInt(data.n1),
				n2 = parseInt(data.n2),
				result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		});
	} else {
		res.statusCode = 404;
		res.end();
		return;
	}

});

server.listen(9090);
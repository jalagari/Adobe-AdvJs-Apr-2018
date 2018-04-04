var http = require('http'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url);
	if (urlObj.pathname !== '/calculator'){
		res.statusCode = 404;
		res.end();
		return;
	}
	var data = querystring.parse(urlObj.query);
	var op = data.op,
		n1 = parseInt(data.n1),
		n2 = parseInt(data.n2),
		result = calculator[op](n1, n2);
	res.write(result.toString());
	res.end();
});

server.listen(9090);
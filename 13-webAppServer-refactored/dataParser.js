var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	var resource = req.url === '/' ? 'index.html' : req.url;
	req.urlObj = url.parse(resource);
	req.query = querystring.parse(req.urlObj.query);
	var rawData = '';
	req.on('data', function(chunk){
		rawData += chunk;
	});
	req.on('end', function(){
		req.body = querystring.parse(rawData);
		next();
	});
}
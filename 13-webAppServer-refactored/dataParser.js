var url = require('url');

module.exports = function(req){
	var resource = req.url === '/' ? 'index.html' : req.url;
	req.urlObj = url.parse(resource);
}
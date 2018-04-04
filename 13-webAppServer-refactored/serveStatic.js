var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.xml', '.json'];

function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
	if (isStatic(req.urlObj.pathname)){
		var resourcePath = path.join(__dirname, req.urlObj.pathname);

		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resourcePath);
		stream.pipe(res);
	}
}
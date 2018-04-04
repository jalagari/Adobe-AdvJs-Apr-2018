var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.xml', '.json'];

function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(staticResourcePath){
	return function(req, res, next){
		var resourcePath = path.join(staticResourcePath, req.urlObj.pathname);
		if (isStatic(resourcePath) && fs.existsSync(resourcePath)){
			var stream = fs.createReadStream(resourcePath);
			stream.pipe(res);
			stream.on('end', function(){
				next();
			});
		} else {
			next();
		}
	}
};
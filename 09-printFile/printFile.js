var fs = require('fs');

var fileContents = fs.readFile('test.txt', { encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('something went wrong');
		console.log(err);
		return;
	}
	console.log(fileContents);
});


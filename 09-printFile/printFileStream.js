var fs = require('fs');

var stream = fs.createReadStream('test.txt', {encoding : 'utf8'});

//ReadableStream events - open, data, end, close, error

var readCount = 0;
stream.on('data', function(fileChunk){
	console.log(fileChunk);
	readCount++;
});

stream.on('end', function(){
	console.log('Thats all folks!');
	console.log('read operation completed with ', readCount , ' chunks');
});
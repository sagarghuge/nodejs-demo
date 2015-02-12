var http = require('http');

http.createServer(function(req, res){

	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		case '':
			res.writeHead(200, {'contentType': 'text/plain'});
			res.end('HomePage');
			break;
		case '/about':
			res.writeHead(200, {'contentType': 'text/plain'});
			res.end('About Me');
			break;
		default:
			res.writeHead(200, {'contentType': 'text/plain'});
			res.end('Not Found');
			break;
	}
}).listen(3000);

console.log('Server started..');

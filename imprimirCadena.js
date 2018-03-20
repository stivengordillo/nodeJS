var http = require('http');
var url  = require('url');
http.createServer
(
	function(request,response)
	{
		response.writeHead(
			200,
			{	
				'Content-Type':'text/plain'
			}
		);
		var params = url.parse(request.url, true).query;
		var nombre = params.nombre;
		response.end(
			'hola '+nombre
		);
	}
).listen(3000);
console.log('run in 3000');
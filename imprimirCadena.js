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
		var nombre   = params.nombre;
		var apellido = params.apellido;
		response.end(
			'hola '+nombre+' '+apellido
		);
	}
).listen(3000);
console.log('run in 3000');
var fs   = require('fs');
var http = require('http');

http.createServer(
	function(request,response)
	{
		var new_file      = new fs.createWriteStream('new_image.jpg');
		var bytes_totales = request.headers['content-length'];
		var bytes_subidos = 0;

		request.pipe(new_file);

		request.on(
			'data',
			function(chunk)
			{
				bytes_subidos += chunk.length;
				var progreso   = (bytes_subidos/bytes_totales)*100;
				response.write('progress: '+parseInt(progreso,10)+ '%\n');
			}
		);

		request.on(
			'end',
			function()
			{
				response.end('fin');
			}
		)
	}
).listen(8000);
console.log('server corriendo');
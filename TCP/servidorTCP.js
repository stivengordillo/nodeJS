var net = require('net');
var server = net.createServer
(
	function(con)
	{
		con.on
		(
			'data',
			function(chunk)
			{
				console.log('dato enviado desde el cliente:'+chunk);
				con.write('Repetimos: '+chunk);
			}
		);

		con.on
		(
			'close',
			function()
			{
				console.log('conexión cerrada');
			}
		);

		con.on
		(
			"error",
			function(err)
			{
				console.log('conexión perdida')
			}
		);
	}
).listen(8000);
console.log('run in 8000');
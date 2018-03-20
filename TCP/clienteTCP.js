var net = require('net');

var client = net.connect(
	{
		port:'8000',
		function()
		{
			client.setEncoding('utf8');
			console.log('corriendo');
			client.write('saludo server');
		}
	}
)

process.stdin.resume();

process.stdin.on(
	'data',
	function(chunk)
	{
		client.write(chunk);
	}
)

client.on(
	'data',
	function(chunk)
	{
		console.log(chunk);
	}
)

client.on(
	'close',
	function()
	{
		console.log('conexión cerrada');
	}
)

client.on(
	'error',
	function(err)
	{
		console.log('conexión perdida');
	}
)
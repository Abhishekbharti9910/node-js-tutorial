#!/usr/bin/env node

const http = require('node:http')

const server = http.createServer((req, res) => {
res.writeHead(200, {'contentType': 'application/json'});
res.end(JSON.stringify(
	{
		data: 'hello world',
	}));

})

server.listen(8000);

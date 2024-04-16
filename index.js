#!/usr/bin/env node
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	console.log(req.url);
	if(req.url == '/' || req.url == '') {
		fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
			if(err) {
				res.writeHead(500);
				res.end('Error loading index.html');
			} else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data);
			}
		})
	} 
	else if (req.url == '/about') {
		fs.readFile(path.join(__dirname, '/public/about.html'), (err, data) => {
			if(err) {
				res.writeHead(500);
				res.end('Error loading about.html')	
			} else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data)
			}
		})
	} 
	else if(req.url == '/contact') {
		fs.readFile(path.join(__dirname, '/public/contact-me.html'), (err, data) => {
			if(err) {
				res.writeHead(500);
				res.end('Error loading contact-me.html');
			} else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data);
			}
		})
	}
	else {
	
	fs.readFile(path.join(__dirname, '/public/404.html'), (err, data) => {
		if (err) {
			res.writeHead(500);
			res.end('Error in Loading 404.html');
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data)
		}
	})
	
}})

server.listen(8080);

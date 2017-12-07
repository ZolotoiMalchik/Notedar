var gulp = require('gulp'),
bs = require('browser-sync').create(),
express = require('express'),
spawn = require('child_process').spawn,
app = express(),
server = require('http').createServer(app),
io = require('socket.io')();//.listen(server, {}),

app.use(express.static(__dirname + '/'));
//app.use(express.static('/sap/', __dirname + 'http://sbt-oopp-007:8050/sap/'));

server.listen(3009);
console.log("Server: localhost:3009 start");
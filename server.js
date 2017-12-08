var express = require('express'),
app = express(),
server = require('http').createServer(app);

app.use(express.static(__dirname + '/'));
//app.use(express.static('/sap/', __dirname + 'http://sbt-oopp-007:8050/sap/'));

server.listen(3009);
console.log("Server: localhost:3009 start");
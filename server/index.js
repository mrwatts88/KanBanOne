const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./SocketIO')(io);
require('./Mongoose/mongoose.js')();
app.use(express.static('../dist'));

server.listen(8080);

//


var net = require('net');

// var HOST = '127.0.0.1';
var HOST = '10.0.0.4';
var PORT = 8081;

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(sock => {

    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

    // Add a 'data' event handler to this instance of socket
    sock.on('data', data => {

        console.log('DATA ' + sock.remoteAddress + ': ' + data);

        // Write the data back to the socket, the client will receive it as data from the server
        sock.write('You said "' + data + '"');
    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', data => {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);
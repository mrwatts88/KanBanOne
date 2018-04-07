const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./SocketIO')(io);
require('./Mongoose/mongoose.js')();
app.use(express.static('../dist'));

server.listen(8080);

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./SocketIO')(io);
const dataManager = require('./DataManager/index')
const sockets = require('./SocketIO')

require('./Mongoose/mongoose.js')();
app.use(express.static('../dist'));
const dm = new dataManager();
sockets.dataSockets();

server.listen(8080);

module.exports = {
    dataManager: dm
}
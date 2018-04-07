const express = require('express');
const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
app.use(express.static('../dist'));


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

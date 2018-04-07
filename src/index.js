import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8080');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });

ReactDOM.render(<App />, document.getElementById('app'));
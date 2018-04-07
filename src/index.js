import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8080');
socket.emit('station_update',
 {
   '87878': 'blue',
   '8374': 'red',
   '298984': 'greens'
 });

ReactDOM.render(<App />, document.getElementById('app'));
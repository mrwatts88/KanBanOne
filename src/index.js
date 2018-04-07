import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8080');
socket.emit('station_update',
[
  {
    'partNumber': '5647',
    'ledColor': 'red',
  },
  {
    'partNumber': '52797',
    'ledColor': 'blue',
  }
]);

ReactDOM.render(<App />, document.getElementById('app'));
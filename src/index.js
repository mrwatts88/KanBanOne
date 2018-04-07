import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import './WebSockets/index.js';

const WebSocket = require('ws');

const ws = new WebSocket('ws://us-central1-kanbanone-9203d.cloudfunctions.net/app');

ws.on('open', () => {
  ws.send('somethingFromClint');
});

ws.on('message', data => {
  console.log(data);
});

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8080');







ReactDOM.render(<App />, document.getElementById('app'));
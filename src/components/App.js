import React, { Component } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');
class App extends Component {
  constructor() {
    super();

    this.order = this.order.bind(this);
    this.fulfill = this.order.bind(this);
    this.ship = this.order.bind(this);
  }

  order() {
    socket.emit('order',
      {
        'station': 5,
        'part':
          {
            'partNumber': '87647',
            'ledColor': 'red',
          }
      });
  }

  fulfill() {
    socket.emit('fulfillment',
      {
        'station': 5,
        'part':
          {
            'partNumber': '5647',
            'ledColor': 'blue',
          }
      });
  }

  ship() {
    socket.emit('shipment',
      {
        'station': 5,
        'part':
          {
            'partNumber': '34547',
            'ledColor': 'yellow',
          }
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.order}>Bin Leaves Station</button>
        <button onClick={this.ship}>Bin Enters Delivery Cart</button>
        <button onClick={this.fulfill}>Bin Enters Station</button>
      </div>
    );
  }
}

export default App;

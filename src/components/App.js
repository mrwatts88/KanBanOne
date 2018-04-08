import React, { Component } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');
class App extends Component {
  constructor() {
    super();

    this.state = {
      order: [],
      transit1: [],
      transit2: [],
      fulfillment: []
    }

    this.order = this.order.bind(this);
    this.transit1 = this.transit1.bind(this);
    this.transit2 = this.transit2.bind(this);
    this.fulfillment = this.fulfillment.bind(this);

    socket.on('order_s', msg => {
      console.log(msg);
      this.setState({
        order: msg
      });
    });

    socket.on('transit1_s', msg => {
      console.log(msg);
      this.setState({
        transit1: msg
      });
    });

    socket.on('transit2_s', msg => {
      console.log(msg);
      this.setState({
        transit2: msg
      });
    });

    socket.on('fulfillment_s', msg => {
      console.log(msg);
      this.setState({
        fulfillment: msg
      });
    });
  }


  order() {
    socket.emit('order',
      {
        'partNumber': '87647',
        'ledColor': 'red',
        'id': '567',
        'station': 5,
      }
    );
  }

  transit1() {
    socket.emit('transit1',
      {
        'partNumber': '34547',
        'ledColor': 'yellow',
        'id': '20957',
        'station': 5,
      }
    );
  }

  transit2() {
    socket.emit('transit2',
      {
        'partNumber': '34547',
        'ledColor': 'yellow',
        'id': '20957',
        'station': 5
      }
    );
  }

  fulfillment() {
    socket.emit('fulfillment',
      {
        'partNumber': '5647',
        'ledColor': 'blue',
        'id': '0257',
        'station': 5,
      }
    );
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <button onClick={this.order}>Order</button>
          </div>
          <div className="col-md-3">
            <button onClick={this.transit1}>Transit 1</button>
          </div>
          <div className="col-md-3">
            <button onClick={this.transit2}>Transit 2</button>
          </div>
          <div className="col-md-3">
            <button onClick={this.fulfillment}>Fulfillment</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ul>
              {this.state.order.map(el => <li>{el}</li>)}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {this.state.transit1.map(el => <li>{el}</li>)}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {this.state.transit2.map(el => <li>{el}</li>)}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {this.state.fulfillment.map(el => <li>{el}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

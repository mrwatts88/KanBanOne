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
      fulfilled: []
    }

    this.order = this.order.bind(this);
    this.transit1 = this.transit1.bind(this);
    this.transit2 = this.transit2.bind(this);
    this.fulfilled = this.fulfilled.bind(this);

    socket.on('order_s', msg => {
      console.log(msg);
      this.setState({
        order: [...this.state.order, msg]
      });
    });

    socket.on('transit1_s', msg => {
      console.log(msg);
      this.setState({
        transit1: [...this.state.transit1, msg]
      });
    });

    socket.on('transit2_s', msg => {
      console.log(msg);
      this.setState({
        transit2: [...this.state.transit2, msg]
      });
    });

    socket.on('fulfilled_s', msg => {
      console.log(msg);
      this.setState({
        fulfilled: [...this.state.fulfilled, msg]
      });
    });
  }


  order() {
    socket.emit('order',
      {
        'partNumber': '87647',
        'ledColor': 'red',
        'id': '567',
        'station': 5
      }
    );
  }

  transit1() {
    socket.emit('transit1',
      {
        'partNumber': '34547',
        'ledColor': 'yellow',
        'id': '567',
        'station': 5,
        'state': ''
      }
    );
  }

  transit2() {
    socket.emit('transit2',
      {
        'partNumber': '34547',
        'ledColor': 'yellow',
        'id': '567',
        'station': 5,
        'state': ''
      }
    );
  }

  fulfilled() {
    socket.emit('fulfilled',
      {
        'partNumber': '5647',
        'ledColor': 'blue',
        'id': '567',
        'station': 5,
        'state': ''
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
            <button onClick={this.fulfilled}>Fulfillment</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ul>
              {this.state.order.map(el => <li>{el.partNumber}</li>)}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {this.state.transit1.map(el => <li>{el.partNumber}</li>)}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {this.state.transit2.map(el => <li>{el.partNumber}</li>)}
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              {this.state.fulfilled.map(el => <li>{el.partNumber}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

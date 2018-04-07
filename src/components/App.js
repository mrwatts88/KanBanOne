import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super(){}

    this.order = this.order.bind(this);
    this.fulfill = this.order.bind(this);
    this.ship = this.order.bind(this);
  }

  order(){
    socket.emit('order',
    { 'station': 5,
      'part: 
        {
          'partNumber': '87647',
          'ledColor': 'red',
        }  
    });
  }

  fulfill(){
    socket.emit('fulfillment',
    { 'station': 5,
      'part: 
        {
          'partNumber': '5647',
          'ledColor': 'blue',
        }  
    });
  }

  ship(){
    socket.emit('shipment',
    { 'station': 5,
      'part: 
        {
          'partNumber': '34547',
          'ledColor': 'yellow',
        }  
    });
  }

  render() {
    return (
      <div>
       <button onClick={}>Bin Leaves Station</button>
       <button onClick={}>Bin Enters Delivery Cart</button>
       <button onClick={}>Bin Enters Station</button>
      </div>
    );
  }
}

export default App;

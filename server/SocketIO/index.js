var net = require('net');
const Part = require('../Models/Part.js')
const globals = require('../index.js')

// const HOST = '127.0.0.1';
const HOST = '10.0.0.4';
const PORT = 8081;

const createPart = function (part) {
    let p = new Part({
        partNumber: part.partNumber,
        ledColor: part.ledColor
    });

    p.save((err, part) => {
        if (err) return console.error(err);
    });
}

const webSocketListeners = io => {
    io.on('connection', socket => {
        let dm = new DataManager();

        //Message Origin: Comes from the station shelf
        //Message Destination: To the cart and inventory
        //Why: A bin was empty and placed on top
        socket.on('order', data => {
            // console.log("State is ordered: " + JSON.stringify(data, null, 4));
            dm.changeState(data, 'ordered');
            socket.emit('order_s', data);
        });


        //Message Origin: Comes from the Cart
        //Message Destination: To the inventory
        //Why: An empty bin was placed on the cart
        socket.on('transit1', data => {
            //todo
            // console.log("State is now transit1: " + JSON.stringify(data, null, 4));
            dm.changeState(data, 'transit1');
            socket.emit('transit1_s', data);
        });

        //Message Origin: Comes from the Cart
        //Message Destination: To the inventory
        //Why: A bin swap has occured
        socket.on('transit2', data => {
            //todo
            // console.log("State is transit2: " + JSON.stringify(data, null, 4));
            dm.changeState(data, 'transit2');
            socket.emit('transit2_s', data);
        });

        //Message Origin: Comes from the station shelf
        //Message Destination: To the inventory
        //Why: The second full bin was placed on the cart
        socket.on('fulfilled', data => {
            // console.log("State is fulfilled: " + JSON.stringify(data, null, 4));
            dm.changeState(data, 'fulfilled');
            socket.emit('fulfilled_s', data);
        })
    });
}

const dataSockets = () => {
    
    // Create a server instance, and chain the listen function to it
    // The function passed to net.createServer() becomes the event handler for the 'connection' event
    // The sock object the callback function receives UNIQUE for each connection
    net.createServer(sock => {

        // We have a connection - a socket object is assigned to the connection automatically
        console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

        // Add a 'data' event handler to this instance of socket
        sock.on('data', data => {

            console.log('DATA ' + sock.remoteAddress + ': ' + data);
            globals.dataManager.changePartSate(data);

            // Write the data back to the socket, the client will receive it as data from the server
            sock.write('You said "' + data + '"');
        });

        // Add a 'close' event handler to this instance of socket
        sock.on('close', data => {
            console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
        });

    }).listen(PORT, HOST);

    console.log('Server listening on ' + HOST + ':' + PORT);
}

module.exports = {
    webSocketListeners,
    dataSockets

}

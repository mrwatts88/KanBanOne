const Part = require('../Models/Part.js').Part;

const createPart = function(part){
    let p = new Part({
        partNumber: part.partNumber,
        ledColor: part.ledColor
    });

    p.save((err, part) => {
        if (err) return console.error(err);
    });
}

const socketListeners = io => {
    io.on('connection', socket => {
        let dm = new DataManager();

        //Message Origin: Comes from the station shelf
        //Message Destination: To the cart and inventory
        //Why: A bin was empty and placed on top
        socket.on('order', data => {
            console.log("State is ordered: " + JSON.stringify(data,null,4));
            dm.changeState(data, 'ordered');
            socket.emit('order_s', data);
        });

        
        //Message Origin: Comes from the Cart
        //Message Destination: To the inventory
        //Why: An empty bin was placed on the cart
        socket.on('transit1', data => {
            //todo
            console.log("State is now transit1: " + JSON.stringify(data,null,4));
            dm.changeState(data,'transit1');
            socket.emit('order_s', data);
        });

        //Message Origin: Comes from the Cart
        //Message Destination: To the inventory
        //Why: A bin swap has occured
        socket.on('transit2', data => {
            //todo
            console.log("State is transit2: " + JSON.stringify(data,null,4));
            dm.changeState(data,'transit2');
            socket.emit('order_s', data);
        });

        //Message Origin: Comes from the station shelf
        //Message Destination: To the inventory
        //Why: The second full bin was placed on the cart
        socket.on('fulfilled', data => {
            console.log("State is fulfilled: " + JSON.stringify(data,null,4));
            dm.changeState('fulfilled');
            socket.emit('order_s', data);
        })
    });
}

module.exports = socketListeners;
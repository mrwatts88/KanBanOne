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

        socket.on('order', data => {
            console.log("Recieved and order for: " + data);
        });

        socket.on('fulfillment', data => {
            //todo
            console.log("Recieved and order for: " + data);
        });

        socket.on('shipment', data => {
            //todo
            console.log("Recieved and order for: " + data);
        });
    });
}

module.exports = socketListeners;
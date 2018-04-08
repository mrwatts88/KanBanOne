const Part = require('../Models/Part.js').Part;

const createPart = function (part) {
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
            //todo
            console.log("Recieved and order for: " + JSON.stringify(data, null, 4));
        });

        socket.on('fulfillment', data => {
            //todo
            console.log("Part fulfilled: " + JSON.stringify(data, null, 4));
        });

        socket.on('shipment', data => {
            //todo
            console.log("Part shipped: " + JSON.stringify(data, null, 4));
        });
    });
}

module.exports = socketListeners;

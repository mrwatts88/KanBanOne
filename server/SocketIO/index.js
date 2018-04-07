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
        socket.on('station_update', data => {
            data.map(part => createPart(part))
        });
    });
}

module.exports = socketListeners;

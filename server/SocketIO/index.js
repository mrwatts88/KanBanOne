const Part = require('../Models/Part.js').Part;

const socketListeners = io => {
    io.on('connection', socket => {
        socket.on('station_update', data => {
            
            let parts = data.map( part => new Part({
                        partNumber:part.partNumber,
                        ledColor:part.ledColor
                    }
                );

                part.save((err, part) => {
                    if (err) return console.error(err);                    
                });
            )}
        );

        });

    });
}

module.exports = socketListeners;
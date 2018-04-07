
const socketListeners = (io) => {
    io.on('connection', function (socket) {

        socket.on('station_update', function (data) {
            console.log(data);
        });


    });
}

module.exports = socketListeners;
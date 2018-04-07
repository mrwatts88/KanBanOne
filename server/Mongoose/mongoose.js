const initMongo = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://matt:watts@ds237989.mlab.com:37989/inventory_status');

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', () => {
        console.log('open');
    });
}

module.exports = initMongo;
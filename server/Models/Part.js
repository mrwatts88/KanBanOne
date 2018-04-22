const mongoose = require('mongoose');

var partSchema = mongoose.Schema({
    partNumber: Number,
    ledColor: String
 });

const states = {
    ordered, transit1, transit2, fulfilled, unknown 
}

class Part {
    constructor(number, id){
        this.number = number;
        this.id = id;
        this.state = states.fulfilled;
        this.ledColor = 'blue';
    }

    changeState(){
        this.state = this._next();
    }

    _next(){
        switch(this.state){
            case states.ordered:
                this.state = states.transit1;
                break;
            case states.transit1:
                this.state = states.transit2;
                break;
            case states.transit2:
                this.state = states.fulfilled;
                break;
            case states.fulfilled:
                this.state = states.ordered;
                break;
            // case default:
            //     console.log('Part in unknown state');
            //     this.state = states.unknown;
            //     break;
        }
    }
}
//var Part = mongoose.model('Part', partSchema);

//module.exports.Part = Part;

module.exports = {
    mongoose_part: mongoose.model('Part', partSchema),
    Part: Part
}
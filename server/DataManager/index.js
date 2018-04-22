let p = require('../Models/Part')

class DataManager {
    constructor() {
        this.Parts = [new p.Part('14DH-14',001), new p.Part('14DH-20', 002)];
    }

    changePartSate(part){
        let p = this.Parts.find((_part) => {
            return part.id === _part.id;
        })

        p.changeState();
    }

    addPart(part){
        this.Parts.push(new p.Part(part.number, part.id));
    }


    getParts() {
        return this.Parts;
    }
}

module.exports = DataManager;
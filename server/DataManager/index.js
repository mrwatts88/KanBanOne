class DataManager {
    constructor() {
        this.Parts = [];
    }

    orderPart(part) {
        part.state = 'ordered';
        this.Parts.push(part);
    }

    changeState(part, state) {
        if (state === 'ordered') {
            this.orderPart(part);
            return;
        }

        let foundPart = this.Parts.find((_part) => {
            console.log(part.id, _part.id);
            return part.id === _part.id;
        });


        console.log(foundPart);
        foundPart.state = state;
        for (let p of this.Parts)
            console.log(p);
    }

    getParts() {
        return this.Parts;
    }
}

module.exports = DataManager;
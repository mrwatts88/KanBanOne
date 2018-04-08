

class DataManager{
    

    constructor(){
        this.Parts = [];
    }

    orderPart(part){
        part.state = 'ordered';
        this.Parts.push(part);
    }

    changeState(part, state){
        if(state === 'ordered'){
            this.orderPart(part);
            return;
        }

        let foundPart = this.Parts.find((_part) => {
            return part.id == _part.id;
        });

        foundPart.state = state;
    }

    getParts(){
        return this.Parts;
    }
}

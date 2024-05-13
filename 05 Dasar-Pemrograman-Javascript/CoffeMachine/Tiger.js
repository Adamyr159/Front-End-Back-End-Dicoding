class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl(){
        return "grrrr";
    }
}

module.exports = Tiger;

// module.exports = {coffeeStock, isCoffeMachineReady};

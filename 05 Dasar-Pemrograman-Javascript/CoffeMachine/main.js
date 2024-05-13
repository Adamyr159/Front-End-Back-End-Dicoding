const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        return tiger.growl();
    } else if (wolf.strength > tiger.strength){
        return wolf.howl();
    }
    return "Harimau dan Serigala seri";
}

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);

console.log(result);


module.exports = {fight, myTiger, myWolf, result};
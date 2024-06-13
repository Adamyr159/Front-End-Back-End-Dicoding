const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };

const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
  }
 
myEventEmitter.on('birthday', birthdayEventListener);
 
// Memicu event 'birthday' terjadi.
myEventEmitter.emit('birthday', { name: 'Adam' });
 
/**
 * output:
 * Kopi Tubruk telah dibuat!
 */
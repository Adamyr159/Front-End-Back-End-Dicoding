import _ from 'lodash';
const {coffeeStock, isCoffeMachineReady} = require('./state');
// import {coffeeStock, isCoffeMachineReady} from "./state.js";
console.log(coffeeStock);
console.log(isCoffeMachineReady);

// const displayStock = stock => {
//     for (const type in stock) {
//         console.log(type);
//     }
// }

// displayStock(coffeeStock);

// const makeCoffe = (type, miligrams) => {
//     if (coffeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// makeCoffe("robusta", 300)
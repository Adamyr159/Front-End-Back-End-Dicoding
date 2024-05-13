const myMap = new Map (
    [
        ["1", "A string Key"],
        [1, "A number Key"],
        [true, true],
    ]
);

// console.log(myMap);


const capital = new Map (
        ["Jakarta", "Indonesia"],
        ["London", "England"],
        ["Tokyo", "Japan"],

);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));


const numberSet = new Set(
    [1,2,4,2,1]
);

// console.log(numberSet);
// numberSet.add(5, 6);
// numberSet.add(7);
// console.log(numberSet);


const visitsCountMap = new WeakMap();

function countUser (user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, ++count );
}

let jonas = { name: "Jonas"};
countUser(jonas);

jonas = null;


setTimeout(function() {
    console.log(visitsCountMap);
}, 10000)


/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */


/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// let evenNumber = [];

// for (let i = 1; i <= 100; i++) {
//  	if (i % 2 == 0) {
//     	evenNumber.push(i);
//         console.log(evenNumber);
//     }
// }

/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;

// Tulis kode di bawah ini
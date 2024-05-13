function multiply (a,b) {
    return a*b;
}

console.log(multiply(3,4));


// Function Parameter
const user = {
    id: 24,
    displayName: "adams",
    fullName: "Adam Yusron",
}

function introduce ({displayName, fullName}, {id}) {
    return (`${id} = ${displayName} is ${fullName}`);
}

console.log(introduce(user, user));


// Default Parameter
function exponentsFormula (baseNumber, exponent = 3) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);


// Rest Parameter
function sum(...numbers){
    return numbers;
}

console.log(sum(1,2,3,4));


// Arrow Function
const sayHello = (name) => {
    console.log(`Hello ${name}`)
}

sayHello("Adam")

const sayName = (name) => `Hallo ${name}`;
console.log(sayName("Rahma"))


// Variable Scope
const name = "adam";
function parent() {
    const age = 19;

    function child (){
        console.log(`${name} berumur ${age}`);
    }
    child();
}

parent();


// Closure - masih gapaham
function init(){
    const status = "Menikah";

    function greet(){
        console.log(`Status ${name} = ${status}`)
    }

    greet();
}

init();



/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */
// Tulis kode di bawah ini

const minimal = (a,b) => {
	if (a < b) {
      return a;
    } else if(a > b){
      return b;
    } else if(a == b) {
      return a;
    }
}
console.log(minimal(4,4));

const findIndex = (numbers, number) => {
  	let result = -1;
  	numbers.forEach ((value, index) => {
		  if (value == number) {
          	result = index;
          }
    })
  	return result;
	
}
console.log(findIndex([1,2,3], 3))
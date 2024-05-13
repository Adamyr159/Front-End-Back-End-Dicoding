// Konsep OOP - OLD
// const car = {
//     // properties
//     brand: "Ford",
//     color: "Red",
//     maxSpeed: 200,
//     chassisNumber: "f-1",

//     // Method
//     drive: () => {
//         console.log('driving');
//     },
//     reverse: () => {
//         console.log('reversing');
//     },
//     turn: () => {
//         console.log('turning');
//     }
// }


// console.log(car);
// console.log(car.brand);
// car.drive();


// KONSEP OOP CONSTRUCTION FUNCTION
// function Car (brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
// }

// Car.prototype.drive = function() {
//     console.log(`${this.brand} ${this.color} is driving`);
// }
// Car.prototype.reverse = function() {
//     console.log(`${this.brand} ${this.color} is reversing`);
// }
// Car.prototype.turn = function() {
//     console.log(`${this.brand} ${this.color} is turning`);
// }

// Membuat objek mobil dengan constructor function car
// const car1 = new Car("Toyota", "Silver", 180, "To-01");
// const car2 = new Car("Honda", "Black", 200, "Ho-01");
// const car3 = new Car("Suzuki", "Red", 220, "Su-01");

// car1.drive();



// CLASS VERSI ES6
// class Car {
//     constructor (brand, color, maxSpeed){
//         this.brand = brand;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
//     }

//     drive() {
//         console.log(`${this.brand} ${this.color} is driving`);
//     }
//     reverse() {
//         console.log(`${this.brand} ${this.color} is reversing`);
//     }
//     turn() {
//         console.log(`${this.brand} ${this.color} is turning`);
//     }
// }

// // Membuat objek mobil dengan constructor function car
// const car1 = new Car("Toyota", "Silver", 180, "To-01");
// const car2 = new Car("Honda", "Black", 200, "Ho-01");
// const car3 = new Car("Suzuki", "Red", 220, "Su-01");

// car1.drive();
// console.log(car1);


// const car = new Car("BMW", "Yellow", 200);
// console.log(car);
// car.chassisNumber = "BMW-1";
// console.log(car);


// Method Getter & Setter
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName);

user.fullName = "Adam Yusron";
console.log(user);
console.log(user.fullName);

user.fullName = "Rahma Maulina";
console.log(user);
console.log(user.fullName);


const user2 = new User("Alif", "Sudrajat");
console.log(user2);
console.log(user2.fullName);

user2.fullName = "Amelia Andani";
console.log(user2);
console.log(user2.fullName);



class Car {
    #chassisNumber = null;
    constructor (brand, color, maxSpeed){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.#chassisNumber = this.#generateChassisNumber();
    }

    get chassisNumber() {
        return this.#chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log(`you are not allowed change the ${this.#chassisNumber} to ${chassisNumber}` );
    }

    // Method
    #generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}


const car = new Car("Yamaha", "Blue", 190);
console.log(car.chassisNumber) 
car.chassisNumber = "BMW-1";
console.log(car.chassisNumber) 
// car.#chassisNumber = "BMW-2";
console.log(car.chassisNumber) 
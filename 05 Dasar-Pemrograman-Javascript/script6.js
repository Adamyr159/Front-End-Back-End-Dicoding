// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
// }

// const json = '{"age": 20}';

// try {
//     const user = JSON.parse(json);

//     if(!user.name) {
//         throw new ValidationError("'name' is required.");
//     }
//     if(!user.age) {
//         throw new ValidationError("'age' is required.");
//     }
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     if ( error instanceof SyntaxError) {
//         console.log(`JSON Syntax Error: ${error.name}`);
//         console.log(`JSON Syntax Error: ${error.message}`);
//     } else if (error instanceof ValidationError) {
//         console.log(`Error Validation: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//         console.log(`Error Refrence: ${error.message}`);
//     }
//      else {
//         console.log(`Error Stack: ${error.stack}`);
//     }
// }

class ValidationError extends Error {
    constructor (message) {
        super(message)
        this.name = "ValidationError";
    }
}

const validateNumberInput = (a, b, c) => {

    if (typeof(a) !== "number") {
        throw new ValidationError("Argumen pertama harus Number");
    } 
    
    if (typeof(b) !== "number") {
        throw new ValidationError("Argumen kedua harus Number");
    }

    if (typeof(c) !== "number") {
        throw new ValidationError("Argumen ketiga harus Number");
    }

}

const detectTriangle = (num1, num2, num3) => {
    try {
        validateNumberInput(num1, num2, num3);
    } catch (error) {
        return `Error Validation: ${error.message}`;
    }
    if (num1 === num2 && num2 === num3) {
        return "Segitiga Sama Sisi";
    } 
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return "Segitiga Sama Kaki";
    }
    return "Segitiga Sembarang";
}

console.log(detectTriangle(null,"a",1));
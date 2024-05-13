// Superclass
// class MailService {
//     constructor(sender) {
//       this.sender = sender;
//     }
   
//     sendMessage(message, receiver) {
//       console.log(`${this.sender} sent ${message} to ${receiver}`);
//     }
//   }


//  // Subclass
// class WhatsAppService extends MailService {
//     // overriding constructor
//     constructor(sender, isBusiness) {
//         super(sender);
//         this.isBusiness = isBusiness;
//     }

//     // Overriding method
//     sendMessage(message, receiver) {
//         console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
//     }


//     sendBroadcastMessage(message, receivers) {
//       for (const receiver of receivers) {
//         this.sendMessage(message, receiver);
//       }
//     }
//   }
   
//   // Subclass
//   class EmailService extends MailService {
//     sendDelayedMessage(message, receiver, delay) {
//       setTimeout(() => {
//         this.sendMessage(message, receiver);
//       }, delay);
//     }
//   }


//   const whatsapp = new WhatsAppService('+6281234567890');
// const email = new EmailService('dimas@dicoding.com');
 
// whatsapp.sendMessage('Hello', '+6289876543210');
// whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// // whatsapp.sendDelayedMessage(); // Error
 
// email.sendMessage('Hello', 'john@doe.com');
// email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
// // email.sendBroadcastMessage(); // Error

// const mailService = new MailService('someSender');
// const whatsappService = new WhatsAppService('+6281234567890');
 
// mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
// whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');



/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// Tulis kode di bawah ini
class Animal {
	constructor(name, age, isMammal) {
    	this.name = name;
    	this.age = age;
    	this.isMammal = isMammal;
    }
}


class Rabbit extends Animal {
	eat() {
    	return `${this.name} sedang makan!`;
    }
}

const myRabbit = new Rabbit("Labi", 2, true);
console.log(myRabbit);


class Eagle extends Animal {
    fly () {
        return `${this.name} sedang terbang!`
    }
}

const myEagle = new Eagle("Elo", 4, false);
console.log(myEagle);


class Car { }
const car = new Car();
console.log(typeof Car);
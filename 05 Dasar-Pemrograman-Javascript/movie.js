function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 100){
                reject(new Error('Not enough money to withdraw'));
            }
            resolve(amount);
        }, 1000);
    });
}

function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 10 ){
                reject(new Error('Not enough money to but ticket'));
            }
            resolve('ticket-1');
        }, 1000);
    });
}

function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket){
                reject(new Error('No Ticket'));
            }
            resolve('enjoy the movie');
        }, 1000);
    });
}

// function watchMovie(){
//     withDrawMoney(140)
//     .then((money) => {
//         return buyCinemaTicket(money);
//     })
//     .then((ticket) => {
//         return goInsideCinema(ticket);
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })
// }


// async dan await
async function watchMovie(amount){
    try {
        const money = await withDrawMoney(amount);
        const ticket = await buyCinemaTicket(money);
        const result = await goInsideCinema(ticket);
        // console.log(result);
        return result;
    } catch (error) {
        // console.log(error.message);
        throw error;
    }
}

watchMovie(10)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
watchMovie(5)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
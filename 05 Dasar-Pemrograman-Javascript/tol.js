function buyTollRoadCard(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 25) {
                console.log('Buying Card Success');
                resolve({ tollRoadCard: true, balance:0});
                return;
            }
            reject(new Error('not enough money to buy card'));
        }, 1000)
    });
}


function topUpBalance(card, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (card) {
                console.log('Topping up balance');
                resolve({ ...card, balance: card.balance + amount});
                return;
            }
            reject(new Error('no card'));
        }, 1000);
    });
}

function useTollRoad(card) {
    const TOLL_PRICE = 10;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (card.balance < TOLL_PRICE) {
                console.log('Topping up balance');
                reject(new Error('not enough balance'));
                return;
            }
            card.balance -= TOLL_PRICE;
            console.log('using toll road');
            resolve(card.balance);
        }, 1000);
    });
}


async function getTollAccess(amount) {
    try {
        const card = await buyTollRoadCard(amount); 
        const cardNew = await topUpBalance(card, amount); 
        const result = await useTollRoad(cardNew);
        return result; 
    } catch (error) {
        console.log(error.message);
    }
}


getTollAccess(25)
.then((result) => console.log(result))
.catch((error) => console.log(error.message));
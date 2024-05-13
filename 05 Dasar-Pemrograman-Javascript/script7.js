// console.log("selamat datang");
// setTimeout(() => {
//     console.log("terimakasi sudah mampir, silahkan datang kembali");
// }, 3000);

// console.log("ada yang bisa dibantu?");


// function getUsers(callback){
//     setTimeout(() => {
//         const users = ['john', 'adam', 'lina'];
//         callback(users);
//     }, 3000);
// }
// getUsers((users) => {
//     console.log(users);
// })

function getUsers(isOffline) {
    return new Promise((resolve, reject) => {
        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Alex', 'Adam'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'), null);
                return;
            }
            resolve(users);
        }, 3000);
    })

}
getUsers(0)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));
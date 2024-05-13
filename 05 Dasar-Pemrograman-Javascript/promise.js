const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
// const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('upsS')), 1000));
// const promise3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('upsSS')), 3000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
console.log(promise1);
console.log(promise2);
console.log(promise3);
Promise.any([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log(error.message));
//// 1.setTimeout - 

// let a = 10;

// setTimeout(() => {
//     a = 34;
//     console.log(a);
// }, 2000);

// console.log(a);

//// 2. promise - 

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve (a = 34);
//     }, 2000) 
// })

// promise.then(() => console.log(a));

//// 3. resolve, reject

const random_num = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
        resolve()
    } else {
        reject()
    }
})

random_num.then(
    () => console.log('>= 0.5'),
    () => console.log('< 0.5')
)
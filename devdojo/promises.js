// let promise = new Promise((resolve, reject) => {
//     // open the file
//     let isOpened: boolean = false;
//     if (isOpened) {
//         resolve('Opened');
//     } else {
//         reject('not Opened')
//     }
// });
// promise.then((fromResolve) => {
//     console.log(fromResolve);
// }).catch((fromRejected) => {
//     console.log(fromRejected);
// });
function openFile() {
    return new Promise((resolve, reject) => {
        // open the file
        let isOpened = true;
        if (isOpened)
            resolve('Opened');
        reject('not Opened');
    });
}
function readFile() {
    return new Promise((resolve, reject) => {
        // open the file
        let isOpened = true;
        if (isOpened)
            resolve('read');
        reject('not read');
    });
}
function deleteFile() {
    return new Promise((resolve, reject) => {
        // open the file
        let isOpened = true;
        if (isOpened)
            resolve('delete');
        reject('not delete');
    });
}
// isto nao funciona
// openFile()
//     .then((fromResolve) => {
//         console.log(fromResolve);
//     })
//     .then(() => {
//         console.log(readFile())
//     })
//     .then(() => {
//         console.log(deleteFile())
//     })
//     .then(() => {
//         console.log('everything ok')
//     });
// este é o modo certo.
openFile()
    .then(() => readFile()
    .then(() => deleteFile()
    .then(() => console.log('everything ok.'))
    .catch((rejected) => console.log(rejected)))
    .catch((rejected) => console.log(rejected)))
    .catch((rejected) => console.log(rejected));
Promise.all([openFile(), readFile(), deleteFile]).then().catch();
Promise.race([openFile(), readFile(), deleteFile]).then().catch();
//# sourceMappingURL=promises.js.map
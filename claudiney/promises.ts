//https://www.youtube.com/watch?v=yccIpJytViA

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('promise1 concluida.');
    // resolve('A promise 1 foi resolvida.')
    reject('A promise 1 foi rejeitada.')
  }, 1000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('promise2 concluida.');
    // resolve('A promise 2 foi resolvida.')
    reject('A promise 2 foi rejeitada.')
  }, 3000);
});
// promise1.then((resultado) => {
//     console.log(resultado);
// })

// promise2.then((resultado) => {
//     console.log(resultado);
// }).catch((erro) => {
//     console.log(erro);

// })

Promise.all([promise1, promise2])
  .then((resultado) => {
    console.log('Todas as promesas fora resolvidas')
    console.log(resultado);
  })
  .catch((erro) => {
    console.log('Uma das promesas foi rejeitada.')
    console.log(erro);
  });
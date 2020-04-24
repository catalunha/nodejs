//https://www.youtube.com/watch?v=rNHe-9wo_AM

async function usandoAsyncAwait() {
    console.log('Inicio execução do usandoAsyncAwait()');
    try {
        let res: number = await getResultado(15);
        if (res > 10) {
            console.log('usandoAsyncAwait: getResultado = ' + res + '. É maior q 10');
            res = await getResultado2(5);
            if (res < 10) {
                console.log('usandoAsyncAwait: getResultado = ' + res + '. É menor q 10');

            }
        }
    } catch (erro) {
        console.log('usandoAsyncAwait: Erro geral');
        console.log(erro);
    }
    console.log('Fim execução do usandoAsyncAwait()');
}

function usandoPromise() {
    console.log('Inicio execução do usandoPromise()');
    getResultado(15)
        .then((resposta) => {
            if (resposta > 10) {
                console.log('usandoPromise: getResultado = ' + resposta + '. É maior q 10');
                getResultado2(5)
                    .then((resposta) => {
                        if (resposta < 10) {
                            console.log('usandoPromise: getResultado = ' + resposta + '. É menor q 10');
                        }
                    })
                    .catch((erro) => {
                        console.log('usandoPromise: Erro em getResultado(5)');
                        console.log(erro);
                    });
            }
        })
        .catch((erro) => {
            console.log('usandoPromise: Erro em getResultado(15)');
            console.log(erro);
        });
    console.log('Fim execução do usandoPromise()');
}
usandoAsyncAwait();
usandoPromise();

function getResultado(parametro: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parametro);
        }, 3000);
    });
}
function getResultado2(parametro: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parametro);
        }, 3000);
    });
}
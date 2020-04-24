//https://www.youtube.com/watch?v=rNHe-9wo_AM
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function usandoAsyncAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Inicio execução do usandoAsyncAwait()');
        try {
            let res = yield getResultado(15);
            if (res > 10) {
                console.log('usandoAsyncAwait: getResultado = ' + res + '. É maior q 10');
                res = yield getResultado2(5);
                if (res < 10) {
                    console.log('usandoAsyncAwait: getResultado = ' + res + '. É menor q 10');
                }
            }
        }
        catch (erro) {
            console.log('usandoAsyncAwait: Erro geral');
            console.log(erro);
        }
        console.log('Fim execução do usandoAsyncAwait()');
    });
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
function getResultado(parametro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parametro);
        }, 3000);
    });
}
function getResultado2(parametro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parametro);
        }, 3000);
    });
}
//# sourceMappingURL=asyncawait.js.map
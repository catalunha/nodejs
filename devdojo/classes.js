class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    // public get value() : string {
    //     return this.nome;
    // }
    // public set nome(v : string) {
    //     this.nome = v;
    // }
    print() {
        console.log(`nome: ${this.nome}`);
    }
}
class Empregado extends Pessoa {
    constructor(nome, salario) {
        super(nome);
        this.salario = salario;
    }
    print() {
        super.print();
        console.log(`salario: ${this.salario}`);
    }
}
let pessoa1 = new Pessoa('maria');
let e1 = new Empregado('Enzo', 1000);
pessoa1.print();
e1.print();
let pessoa2 = {};
pessoa2.nome = 'marta';
let pessoa3 = new Empregado('joao', 2000);
pessoa3.print();
//# sourceMappingURL=classes.js.map
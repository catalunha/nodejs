class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }

// public get value() : string {
//     return this.nome;
// }

// public set nome(v : string) {
//     this.nome = v;
// }

    print(): void {
        console.log(`nome: ${this.nome}`);
    }
}
class Empregado extends Pessoa {
    salario: number;
    constructor(nome: string, salario: number) {
        super(nome);
        this.salario = salario;
    }
    print(): void {
        super.print();
        console.log(`salario: ${this.salario}`);
    }
}
let pessoa1 = new Pessoa('maria');
let e1 = new Empregado('Enzo', 1000);
pessoa1.print();
e1.print();

let pessoa2 = <Pessoa>{}
pessoa2.nome = 'marta';
let pessoa3: Pessoa = new Empregado('joao', 2000);
pessoa3.print();
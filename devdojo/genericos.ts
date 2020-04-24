console.log('+++ genericos.ts');
function reverseList<T>(list: Array<T>): Array<T> {
    let reservedList: T[] = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reservedList.push(list[i]);
    }
    return reservedList;
}

let names = ['a', 'b', 'c'];
console.log(names);
let numbers = [1, 2, 3];
console.log(numbers);
// let reversedNames = reverseList<string>(names);
// let reversedNumbers = reverseList<number>(numbers);
let reversedNames = reverseList(names);
let reversedNumbers = reverseList(numbers);
console.log(reversedNames);
console.log(reversedNumbers);
console.log('--- genericos.ts');
names.push('d');

let reverseListArrow = <T>(list: Array<T>): Array<T> => {
    let reservedList: T[] = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reservedList.push(list[i]);
    }
    return reservedList;
}
console.log(reverseListArrow(names));
class Pessoa3 {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }

    print(): void {
        console.log(`nome: ${this.nome}`);
    }
}
interface Repository<T, ID> {
    findByID(id: ID): T;
    save(entity: T): T;
}

class Pessoa3Repository implements Repository<Pessoa3,number>{
    findByID(id: number): Pessoa3 {
        console.log('Searching using ID: '+id);
        return new Pessoa3('nami');
    }
    save(entity: Pessoa3): Pessoa3 {
        return new Pessoa3('Franky');
    }
}
let pessoa3Repository = new Pessoa3Repository();
console.log(pessoa3Repository.findByID(3));
console.log(pessoa3Repository.save(new Pessoa3('jose')));

interface NumberId{
    id:number;
}
interface Repository2<T, ID extends NumberId> {
    findByID(id: ID): T;
    save(entity: T): T;
}
class Pessoa3Repository2 implements Repository2<Pessoa3,NumberId>{
    findByID(numberId: NumberId): Pessoa3 {
        console.log('Searching using ID: '+numberId.id);
        return new Pessoa3('nami');
    }
    save(entity: Pessoa3): Pessoa3 {
        return new Pessoa3('Franky');
    }
}
let pessoa3Repository2 = new Pessoa3Repository2();
console.log(pessoa3Repository2.findByID({id:1}));
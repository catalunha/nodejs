console.log('+++ genericos.ts');
function reverseList(list) {
    let reservedList = [];
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
let reverseListArrow = (list) => {
    let reservedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reservedList.push(list[i]);
    }
    return reservedList;
};
console.log(reverseListArrow(names));
class Pessoa3 {
    constructor(nome) {
        this.nome = nome;
    }
    print() {
        console.log(`nome: ${this.nome}`);
    }
}
class Pessoa3Repository {
    findByID(id) {
        console.log('Searching using ID: ' + id);
        return new Pessoa3('nami');
    }
    save(entity) {
        return new Pessoa3('Franky');
    }
}
let pessoa3Repository = new Pessoa3Repository();
console.log(pessoa3Repository.findByID(3));
console.log(pessoa3Repository.save(new Pessoa3('jose')));
class Pessoa3Repository2 {
    findByID(numberId) {
        console.log('Searching using ID: ' + numberId.id);
        return new Pessoa3('nami');
    }
    save(entity) {
        return new Pessoa3('Franky');
    }
}
let pessoa3Repository2 = new Pessoa3Repository2();
console.log(pessoa3Repository2.findByID({ id: 1 }));
//# sourceMappingURL=genericos.js.map
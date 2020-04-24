function printName(person: { name: string }): void {
    console.log(person.name);
}
let randomObj = { name: 'nome', age: 10 };
let randomObj2 = { age: 10 };
printName(randomObj);
// printName(randomObj2);
interface Person {
    name: string;
    // age?: number;
}
interface Employee extends Person {
    salary: number;
}
let pe: Person = { name: 'joao' };
let emp: Employee = { name: 'maria', salary: 2000 };
printName(pe);
printName(emp);
function printName2(person: Person): void {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({ name: 'jose' } as Employee);
interface Person {
    age?: number;
}

let p2: Person = { name: 'a', age: 1 };
// let p2: Person;
p2.name = 'aa';
p2.age = 1;
console.log(p2);

interface Manager extends Employee {
    readonly bonus: number;
    // const bonus: number; // cons apenas para variáveis
}
let manager: Manager = { name: 'joana', salary: 2000, bonus: 12 };
manager.name='marta'
// manager.bonus=12;
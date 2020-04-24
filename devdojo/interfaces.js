function printName(person) {
    console.log(person.name);
}
let randomObj = { name: 'nome', age: 10 };
let randomObj2 = { age: 10 };
printName(randomObj);
let pe = { name: 'joao' };
let emp = { name: 'maria', salary: 2000 };
printName(pe);
printName(emp);
function printName2(person) {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({ name: 'jose' });
let p2 = { name: 'a', age: 1 };
// let p2: Person;
p2.name = 'aa';
p2.age = 1;
console.log(p2);
let manager = { name: 'joana', salary: 2000, bonus: 12 };
manager.name = 'marta';
// manager.bonus=12;
//# sourceMappingURL=interfaces.js.map
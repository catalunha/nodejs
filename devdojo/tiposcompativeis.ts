interface Example1 {
    name: string;
}
class AnotherExample1 {
    name: string;
    age: number;
}
class AnotherExample2 {
    num: number;
}

let exampleVar: Example1;
exampleVar = new AnotherExample1();
// exampleVar = new AnotherExample2();
let exVar1 = { name: 'joao', age: 20 };
exampleVar = exVar1;
// exampleVar = {name:'joao',age:20};


function testExample1(ex: Example1): void {
    console.log(ex.name);
}
testExample1(exVar1);
// testExample1({ name: 'joao', age: 20 });

let x1 = (a:number)=> 2*a;
let x2 = (b:number,s:string)=> 3*b;
// let x2 = (b:number,s:string)=> 3*b+s;

console.log(x1(10));
console.log(x2(20,'a'));
x2=x1;
console.log(x2(20,'a'));


let items=[1,2,3];
items.forEach((item,index,array)=>console.log(item));
items.forEach((item)=>console.log(item));
let p = document.createElement('p');
let ola: string = "Olá Mundo";

p.textContent = ola;
document.body.appendChild(p);

let num: number = 10;
let num2: number;
num2=11;
let bool: boolean = true;
let str: string = "Olá";
let str2: string = 'Olá';
let str3: string = `${num}+${str}`;
console.log(str3);
function funcao(): void { }
if (bool !== null) { }
if (bool !== undefined) { }

// console.log('== ' + (true==1));
// console.log('=== ' + (true===1));

if (bool) {
    let i: number;
    for (i = 0; i < 3; i++) {
        console.log(i)
    }
}
// console.log("value of " + i);
let list: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
let tuple: [string, number]
tuple = ['um', 1];
// console.log(tuple);
console.log(tuple[0]);
console.log(tuple[1]);

enum Day { MONDAY, TUESDAY }
let day: Day = Day.MONDAY;
console.log('day: ' + day + ' ' + Day[day]);

function add(v1: number, v2?: number): number {
    if (v2 !== undefined)
        return v1 + v2;
    return v1;
}
console.log(`add ${add(1)}`);
console.log(`add ${add(1, 2)}`);
function add2(v1: any, v2?: any): any {
    if (v2 !== undefined)
        return v1 + v2;
    return v1;
}
console.log(`add2 ${add2(1, 2)}`);
console.log(`add2 ${add2('a', 'b')}`);

let var1: any = 'teste';
let stringLength: number = (<string>var1).length;
let stringUpperCase: string = (var1 as string).toUpperCase();
console.log(`var1 ${stringLength} ${stringUpperCase}`);
console.log('var1 ' + stringLength + ' ' + stringUpperCase);

function add3(v1: string, v2: number[]): void {
    let sum: number = 0;
    for (let i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum)
}
add3('Sum is:',[1,2,3])
function add3a(v1: string, ...v2: number[]): void {
    let sum: number = 0;
    for (let i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum)
}
add3a('Sum is:',1,2,3)
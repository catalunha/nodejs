let p = document.createElement('p');
let ola = "Olá Mundo";
p.textContent = ola;
document.body.appendChild(p);
let num = 10;
let num2;
num2 = 11;
let bool = true;
let str = "Olá";
let str2 = 'Olá';
let str3 = `${num}+${str}`;
console.log(str3);
function funcao() { }
if (bool !== null) { }
if (bool !== undefined) { }
// console.log('== ' + (true==1));
// console.log('=== ' + (true===1));
if (bool) {
    let i;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
// console.log("value of " + i);
let list = [1, 2, 3];
let list2 = [4, 5, 6];
let tuple;
tuple = ['um', 1];
// console.log(tuple);
console.log(tuple[0]);
console.log(tuple[1]);
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
})(Day || (Day = {}));
let day = Day.MONDAY;
console.log('day: ' + day + ' ' + Day[day]);
function add(v1, v2) {
    if (v2 !== undefined)
        return v1 + v2;
    return v1;
}
console.log(`add ${add(1)}`);
console.log(`add ${add(1, 2)}`);
function add2(v1, v2) {
    if (v2 !== undefined)
        return v1 + v2;
    return v1;
}
console.log(`add2 ${add2(1, 2)}`);
console.log(`add2 ${add2('a', 'b')}`);
let var1 = 'teste';
let stringLength = var1.length;
let stringUpperCase = var1.toUpperCase();
console.log(`var1 ${stringLength} ${stringUpperCase}`);
console.log('var1 ' + stringLength + ' ' + stringUpperCase);
function add3(v1, v2) {
    let sum = 0;
    for (let i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add3('Sum is:', [1, 2, 3]);
function add3a(v1, ...v2) {
    let sum = 0;
    for (let i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add3a('Sum is:', 1, 2, 3);
//# sourceMappingURL=olamundo.js.map
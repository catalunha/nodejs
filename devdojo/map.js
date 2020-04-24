let letterOrder = new Map();
letterOrder.set("a", 1);
letterOrder.set("b", '2');
letterOrder.set("a", 11);
console.log(letterOrder);
let letterOrder2 = new Map();
letterOrder2.set("c", 3).set("d", 4);
console.log(letterOrder2);
let letterOrder3 = new Map([['e', 5], ['f', 6]]);
console.log(letterOrder3);
console.log(letterOrder3.get('e'));
for (const key of letterOrder.keys()) {
    console.log(key);
    console.log(letterOrder.get(key));
}
for (const value of letterOrder.values()) {
    console.log(value);
}
for (const entry of letterOrder) {
    console.log(entry[0]);
}
for (const entry of letterOrder.entries()) {
    console.log(entry[0]);
}
for (const [key, value] of letterOrder.entries()) {
    console.log(key);
    console.log(value);
}
//# sourceMappingURL=map.js.map
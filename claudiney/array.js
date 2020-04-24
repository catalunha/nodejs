// https://www.youtube.com/watch?v=nbgqnHKhxd4
var array1 = [1, 2, 3];
console.log(array1);
console.log('Todos os itens: ' + array1);
console.log('É um array: ' + Array.isArray(array1));
array1[5] = 5;
console.log(array1);
console.log('Todos os itens: ' + array1);
array1.push(6);
console.log(array1);
console.log('Todos os itens: ' + array1);
console.log(array1.reverse());
// https://www.youtube.com/watch?v=bK8OzL-tiJk
const array2 = [2, 4, 6, 8, 10, 15, 20];
console.log(array2);
// console.log(array2.includes(10)); nao implementado no ES2017
console.log(array2.indexOf(10));
console.log(array2.slice(2, 4));
console.log(array2.filter((element) => {
    return element > 6;
}));
console.log(array2.map((element) => {
    return element * 10;
}));
let total = 0;
console.log(array2.reduce((total, element) => {
    return total + element;
}, 10));
//# sourceMappingURL=array.js.map
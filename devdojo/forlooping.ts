let array = ['aa', 'bb', 'cc'];
console.log('for array');
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log('forEach array');
array.forEach((name, key) => {
    console.log(key);
    console.log(name);
    //nao pode usar break, continue, return 
});
console.log('for in array');
for (const key in array) {
    console.log(key);
    console.log(array[key]);

}
console.log('for of array');
for (const key of array) {
    console.log(key);
    //pode usar break, continue, return 

}
let person = { name: 'joao', lastname: 'silva' };
console.log('for in objeto');
for (const key in person) {
    console.log(key);
    console.log(person[key]);
}

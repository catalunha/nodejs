function doingSomething(callback) {
    callback.call(this, "joao");
    callback.apply(this, ["jose", "maria"]);
    callback("marta");
}
function execute(name) {
    console.log(name);
}
doingSomething(execute);
function calculator(num1, num2, type) {
    if (type === '+')
        return num1 + num2;
    if (type === '*')
        return num1 + num2;
    return 0;
}
function doingSomethingCrazy(num1, num2) {
    console.log(`Numbers: ${num1} and ${num2}`);
}
function sum(num1, num2) {
    return num1 + num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function calculator2(num1, num2, callback) {
    if (typeof callback === "function") {
        return callback(num1, num2);
    }
    return 0;
}
function calculator3(num1, num2, callback) {
    return callback(num1, num2);
}
console.log(calculator(1, 2, '+'));
console.log(calculator2(2, 3, sum));
console.log(calculator2(2, 3, mult));
console.log(calculator2(2, 3, doingSomethingCrazy));
console.log(calculator3(2, 3, mult));
// console.log(calculator3(2, 3, doingSomethingCrazy));
console.log(calculator3(2, 3, (num1, num2) => {
    return num1 - num2;
}));
//# sourceMappingURL=callbacktest.js.map
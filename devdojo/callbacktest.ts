function doingSomething(callback: (name: string) => void): void {
    callback.call(this, "joao");
    callback.apply(this, ["jose", "maria"]);
    callback("marta");
}
function execute(name: string): void {
    console.log(name);
}
doingSomething(execute);

function calculator(num1: number, num2: number, type: string): number {
    if (type === '+')
        return num1 + num2;
    if (type === '*')
        return num1 + num2;
    return 0;
}
function doingSomethingCrazy(num1: number, num2: number): void {
    console.log(`Numbers: ${num1} and ${num2}`);
}
function sum(num1: number, num2: number): number {
    return num1 + num2;
}
function mult(num1: number, num2: number): number {
    return num1 * num2;
}
function calculator2(num1: number, num2: number, callback): number {
    if (typeof callback === "function") {
        return callback(num1, num2);
    }
    return 0;
}
function calculator3(num1: number, num2: number, callback: (num1: number, num2: number) => number): number {
    return callback(num1, num2);

}
console.log(calculator(1, 2, '+'));
console.log(calculator2(2, 3, sum));
console.log(calculator2(2, 3, mult));
console.log(calculator2(2, 3, doingSomethingCrazy));

console.log(calculator3(2, 3, mult));
// console.log(calculator3(2, 3, doingSomethingCrazy));
console.log(calculator3(2, 3, (num1: number, num2: number) => {
    return num1 - num2;
}));

print1('teste antes de criar a function');
function print1(val) {
    console.log(val);
}
print1();
print1('teste apos criar function');
function printOrNot(flag = false) {
    let str = flag ? 'flag is true' : 'flag is false';
    print1(str);
}
printOrNot();
printOrNot(true);
let sumAnonymous = function (n1, n2) {
    console.log(`sum: ${n1 + n2}`);
};
sumAnonymous(1, 2);
let sumAnonymous2 = (n1, n2) => console.log(`sum2: ${n1 + n2}`);
console.log(sumAnonymous2(3, 4));
let objArrow = (name, surname) => ({ name: name, surname: surname });
console.log(objArrow('a', 'b'));
// function testThis() {
//     return this;
// }
// console.log(testThis());
let objExample = {
    name: 'big',
    lastName: 'hero',
    fullName: function () {
        return this;
    },
};
console.log(this);
console.log(objExample.name);
console.log(objExample.fullName());
// console.log(objExample.fullName2());
// console.log(objExample.fullName3());
// console.log(objExample.fullName4);
let lottery = {
    names: ['Gon', 'Leorio', 'bat'],
    test: 'lalala',
    createLotteryPicker: function () {
        console.log('first level this:' + this);
        let personPickerNumber = Math.floor(Math.random() * 3);
        console.log(this.names[personPickerNumber]);
        return () => {
            console.log('second level this:' + this);
            let personPickerNumber = Math.floor(Math.random() * 3);
            // console.log(personPickerNumber)
            return { name: this.names[personPickerNumber] };
        };
    }
};
let personPicker = lottery.createLotteryPicker();
console.log(personPicker());
// let pickedPerson = personPicker();
// console.log(pickedPerson);
//# sourceMappingURL=funcoes.js.map
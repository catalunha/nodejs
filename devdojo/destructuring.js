var Destructuring;
(function (Destructuring) {
    let person = { name: 'joao', lastname: 'silva' };
    let name1 = person.name;
    let lastname1 = person.lastname;
    console.log(name1);
    console.log(lastname1);
    let { name: name2, lastname: lastname2 } = person;
    console.log(name2);
    console.log(lastname2);
    //eu acho q deveria ser assim, masssss
    // let {name3:name,lastname3:lastname}=person;
    // console.log(name3);
    // console.log(lastname3);
    let array = ['aa', 'bb'];
    let [a, b] = array;
    console.log(a);
    console.log(b);
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    function example(person) {
        console.log(person.name);
    }
    function example2({ name }) {
        console.log(person.name);
    }
    example(new Person('aaa'));
    example(new Person('bbb'));
    example({ name: 'ccc' });
})(Destructuring || (Destructuring = {}));
//# sourceMappingURL=destructuring.js.map
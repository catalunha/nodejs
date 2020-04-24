let element = document.getElementById("btn2"); //HTMLElement
console.log(element);
let element2 = document.querySelector("#btn2"); //Element USE # QUERY POR ID
console.log(element2);
let element3 = document.querySelector(".test"); //USE . QUERY POR CLASS
console.log(element3);
let element4 = document.querySelector(".test"); //USE . QUERY POR CLASS
console.log(element4);
let elements = document.getElementsByTagName("div"); //NodeListOf
console.log(elements[3]);
let element5 = document.querySelectorAll(".test"); //NodeList
console.log(element5);
console.log(element5[0]); //Node
let element6 = document.getElementsByName("button"); //NodeList
console.log(element6);
//# sourceMappingURL=findingElements.js.map
let divMain = document.getElementById("main");
divMain.innerHTML = "<span>DevDojo é uma benção</span>";
// divMain.textContent = "<span>DevDojo é uma benção</span>";
let newDiv = document.createElement("div");
newDiv.textContent = "Ola";
divMain.insertBefore(newDiv, divMain.firstChild);
// divMain.appendChild(newDiv);
//# sourceMappingURL=changingElements.js.map
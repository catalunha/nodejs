class ClickHandler {
    constructor() {
        let main = document.getElementById("main");
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHandler.alertEventMain, true);
            btn1.addEventListener("click", ClickHandler.alertEventBtn1, true);
            btn2.addEventListener("click", ClickHandler.alertEventBtn2, true);
        }
    }
    static alertEventMain(event) {
        alert("Clicked over main");
    }
    static alertEventBtn1(event) {
        alert("Clicked over btn1");
        event.stopPropagation();
    }
    static alertEventBtn2() {
        alert("Clicked over btn2");
    }
}
const clickHandler = new ClickHandler();
//# sourceMappingURL=events.js.map
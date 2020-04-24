class AjaxTest {
    constructor() {
        //0 unitialized
        //1 set up, but not sent
        //2 sent
        //3 in flight
        //4 complete
        this.READY_STATUS_CODE = 4;
    }
    isCompleted(req) {
        return req.readyState === this.READY_STATUS_CODE;
    }
    httpGet(url, callback) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open("GET", url, true);
        req.send();
    }
    httpPost(url, data, callback) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open("POST", url, true);
        req.setRequestHeader("content-type", "application/json");
        req.send(data);
    }
}
let ajax = new AjaxTest();
ajax.httpGet("http://httpbin.org/ip", (status, response) => {
    let divMain = document.getElementById("main");
    divMain.innerHTML = response;
});
ajax.httpPost("http://httpbin.org/post", "{name:'joao',company:'mei'}", (status, response) => {
    let divMain = document.getElementById("main");
    divMain.innerHTML = response;
});
//# sourceMappingURL=ajax.js.map
class AjaxTest {
    //0 unitialized
    //1 set up, but not sent
    //2 sent
    //3 in flight
    //4 complete
    private READY_STATUS_CODE = 4;
    private isCompleted(req: XMLHttpRequest) {
        return req.readyState === this.READY_STATUS_CODE;
    }
    public httpGet(url: string, callback: (status: number, response: string) => any): void {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        }
        req.open("GET", url, true);
        req.send();
    }
    public httpPost(url: string, data:string,callback: (status: number, response: string) => any): void {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        }
        req.open("POST", url, true);
        req.setRequestHeader("content-type","application/json");
        req.send(data);
    }
}
let ajax = new AjaxTest();
ajax.httpGet("http://httpbin.org/ip", (status: number, response: string) => {
    let divMain = <HTMLDivElement>document.getElementById("main");
    divMain.innerHTML = response;
});
ajax.httpPost("http://httpbin.org/post","{name:'joao',company:'mei'}",(status: number, response: string) => {
    let divMain = <HTMLDivElement>document.getElementById("main");
    divMain.innerHTML = response;
});
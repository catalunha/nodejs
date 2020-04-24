let key = "key1";
let key2 = "key2";
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
sessionStorage.setItem(key, "joao");
sessionStorage.setItem(key2, "maria");
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
for (let i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + ":");
    console.log(sessionStorage.getItem(sessionStorage.key(i)));
}
sessionStorage.removeItem(key);
console.log(sessionStorage.getItem(key));
sessionStorage.clear();
console.log('-----------------------');
for (let i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=");
    console.log(sessionStorage.getItem(sessionStorage.key(i)));
}
let key3 = "local storage key3";
// localStorage.setItem(key3, 'trying local storage');
console.log(localStorage.getItem(key3));
localStorage.clear();
//# sourceMappingURL=sessionstorage.js.map
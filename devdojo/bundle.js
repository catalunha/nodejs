(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
class EmailValidatorExternal {
    isValid(str) {
        return emailRegex.test(str);
    }
}
exports.EmailValidatorExternal = EmailValidatorExternal;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
class URLValidatorExternal {
    isValid(str) {
        return urlRegex.test(str);
    }
}
exports.URLValidatorExternal = URLValidatorExternal;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailValidatorExternal_1 = require("./EmailValidatorExternal");
const URLValidatorExternal_1 = require("./URLValidatorExternal");
let emailExamples = ['a@', 'a@b', 'a@b.com.br'];
let urlExamples = ['a.com', 'www.a.com.br', 'http:///a.com.br'];
emailExamples.forEach((email) => {
    console.log('email: ' + email + ' ' + new EmailValidatorExternal_1.EmailValidatorExternal().isValid(email));
});
urlExamples.forEach((url) => {
    console.log('url: ' + url + ' ' + new URLValidatorExternal_1.URLValidatorExternal().isValid(url));
});

},{"./EmailValidatorExternal":1,"./URLValidatorExternal":2}]},{},[3]);

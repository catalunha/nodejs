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
//# sourceMappingURL=externalModules.js.map
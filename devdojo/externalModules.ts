import { EmailValidatorExternal } from "./EmailValidatorExternal";
import { URLValidatorExternal } from "./URLValidatorExternal";

let emailExamples = ['a@', 'a@b', 'a@b.com.br'];
let urlExamples = ['a.com', 'www.a.com.br', 'http:///a.com.br'];

emailExamples.forEach((email) => {
    console.log('email: ' + email + ' ' + new EmailValidatorExternal().isValid(email))
});

urlExamples.forEach((url) => {
    console.log('url: ' + url + ' ' + new URLValidatorExternal().isValid(url))
});
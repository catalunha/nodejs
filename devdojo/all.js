// namespace Validation {
//     let emailRegex: RegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
//     let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
//     export class EmailValidator {
//         isValid(str: string): boolean {
//             return emailRegex.test(str);
//         }
//     }
//     export class UrllValidator {
//         isValid(str: string): boolean {
//             return urlRegex.test(str);
//         }
//     }
// }
var Validation;
(function (Validation) {
    var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.prototype.isValid = function (str) {
            return urlRegex.test(str);
        };
        return UrlValidator;
    }());
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts"/>
/// <reference path="URLValidator.ts"/>
/// <reference path="EmailValidator.ts"/>
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
var emailExamples = ['a@', 'a@b', 'a@b.com.br'];
var urlExamples = ['a.com', 'www.a.com.br', 'http:///a.com.br'];
emailExamples.forEach(function (email) {
    console.log('email: ' + email + ' ' + new EmailValidator().isValid(email));
});
urlExamples.forEach(function (url) {
    console.log('url: ' + url + ' ' + new UrlValidator().isValid(url));
});

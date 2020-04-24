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

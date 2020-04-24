// /// <reference path="Validation.ts"/>
// /// <reference path="URLValidator.ts"/>
// /// <reference path="EmailValidator.ts"/>
// // catalunha@home:~/flutter-projects/nodets$ tsc --outfile scripts/all.js scripts/namespacetest.ts 
// // catalunha@home:~/flutter-projects/nodets$ tsc --outfile scripts/allValidators.js scripts/Validation.ts scripts/EmailValidator.ts scripts/URLValidator.ts 
// // catalunha@home:~/flutter-projects/nodets$ 
// import EmailValidator = Validation.EmailValidator;
// import UrlValidator = Validation.UrlValidator;
// let emailExamples = ['a@', 'a@b', 'a@b.com.br'];
// let urlExamples = ['a.com', 'www.a.com.br', 'http:///a.com.br'];
// emailExamples.forEach((email) => {
//     console.log('email: ' + email + ' ' + new EmailValidator().isValid(email))
// });
// urlExamples.forEach((url) => {
//     console.log('url: ' + url + ' ' + new UrlValidator().isValid(url))
// });
//# sourceMappingURL=namespacetest.js.map
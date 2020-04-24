function doSomethingWithString(input) {
    if (input === undefined || input === "") {
        throw new StringNotValidError('The String ' + input + " is not valid");
    }
    return input;
}
class ApplicationError {
    // message: string;
    constructor(message) {
        this.message = message;
        this.name = 'AplicationError';
        if (typeof console !== undefined) {
            console.log('Error: ' + message);
        }
    }
    toString() {
        return this.name + this.message;
    }
}
class StringNotValidError extends ApplicationError {
}
try {
    let input = doSomethingWithString('');
}
catch (err) {
    if (err instanceof ApplicationError) {
        console.log('Try...catch ApplicationError: ');
        // throw err;
    }
    console.log('Try...catch: ' + err);
}
finally {
    console.log('always executed');
}
//# sourceMappingURL=errors.js.map
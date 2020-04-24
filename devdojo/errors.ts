function doSomethingWithString(input: string): string {
    if (input === undefined || input === "") {
        throw new StringNotValidError('The String ' + input + " is not valid");
    }
    return input;
}
class ApplicationError implements Error {
    name: string = 'AplicationError';
    // message: string;
    constructor(public message: string) {
        if (typeof console !== undefined) {
            console.log('Error: ' + message);
        }
    }
    toString(): string {
        return this.name + this.message;
    }
}
class StringNotValidError extends ApplicationError {

}

try {
    let input = doSomethingWithString('');

} catch (err) {
    if (err instanceof ApplicationError) {
        console.log('Try...catch ApplicationError: ');
        // throw err;
    }
    console.log('Try...catch: ' + err);
} finally {
    console.log('always executed');
}
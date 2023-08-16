function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {}
}

function returnsAnAnonymousFunction() {
    return (() => console.log('This is an anonymous function.'));
}
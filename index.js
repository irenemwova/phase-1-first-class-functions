// receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// returnsANamedFunction function
function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
        // Do something
    }
    // Return the named function
    return namedFunction;
}

// returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        // Do something
    };
}

module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};

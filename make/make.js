const make = (...a) => func = (...args) => {
    if((typeof args[0]) === 'function') return a.reduce(args[0]);
    a = a.concat(args);
    return func;
}
const sum = (a, b) => a + b;
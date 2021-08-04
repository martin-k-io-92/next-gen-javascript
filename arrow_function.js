// Normal function

function printMyName(name) {
    console.log(name);
}

// Arrow function

const printMyName = (name) => {
    console.log(name);
}

// Shortcut for only 1 argument

const printMyName = name => {
    console.log(name);
}

// No argument arrow function

const printMyName = () => {
    console.log('Max');
}

// Multiple arguments arrow function

const printMyName = (name, age) => {
    console.log(name, age);
}

// Return number

const multiply = (number) => {
    return number * 2;
}

console.log(multiply(2))

// Shortcut of return function

const multiply = number => number * 2;

console.log(multiply(2));
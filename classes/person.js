class Person {
    // variables
    name = 'Max'

    // methods
    call = () => { ... }
}

const myPerson = new Person ()
myPerson.call()

console.log(myPerson.name)


// Inheritance
class Person extends Master {
    // ...
}


class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

// class with constructor
class Person {
    constructor() {
        super(); // executes the parent constructor
        this.name = 'Max';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

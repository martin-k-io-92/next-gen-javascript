class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

// class with constructor
class Person {
    name = 'Max';
    
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

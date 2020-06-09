// constructor function - OOP IN ES5
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // this.getBirthYear = function(){
//     //     return this.dob.getFullYear();
//     // }

//     // this.getFullName = function(){
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// Class creation
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`; 
    }
}

// instantiate objects
const person1 = new Person('Mary', 'Guchu', '03-03-1993');
const person2 = new Person('Nancy', 'Chemutai', '02-05-1992');
console.log(person1, person2);
console.log(person1.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person2.getFullName());

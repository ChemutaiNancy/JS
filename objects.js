const person = {
    firstName: 'Jemimah',
    lastName: 'Doe',
    age: 30,
    hobbies: ['travelling', 'music', 'sports'],
    address:{
        street: '50 main st',
        city: 'Nairobi',
        county: 'Nairobi'
    }
}

const {firstName, lastName, address:{city}, hobbies} = person;
console.log(hobbies[1]);

person.email = 'chemutain@gmail.com';
console.log(person);
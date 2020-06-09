const fruits = ['apples', 'mangoes', 'oranges', 'pears'];
fruits[4] = 'grapes';
fruits.push('Guavas');//insert an element at the end of an array
fruits.unshift('Strawberry');//insert an element at the beginning of an array
fruits.pop();//remove the last element of an array
console.log(fruits);
console.log(Array.isArray(fruits));//check if something is an array
console.log(fruits.indexOf('mangoes'));
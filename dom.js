// DOM - DOCUMENT OBJECT MODEL
// console.log(window);

// Single Element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));//works like jquery

// Multiple Elements
console.log(document.querySelectorAll('.item'));//node list similar to an array
console.log(document.getElementsByClassName('item'));//html collection - cannot use array methods on it
console.log(document.getElementsByTagName('li'));

// Loop
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// 
const ul = document.querySelector('.items');
// ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>Hello</h4>'

const btn = document.querySelector('.btn');
btn.style.background = 'red';
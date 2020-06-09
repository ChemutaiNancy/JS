const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with the boss',
        isCompleted: true  
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted: false
    }
];
// console.log(todos);
// console.log(todos[2].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// For loops
// for (let i=0; i<10; i++){
//     console.log(i);
// }

// while loops
// let i=0;
// while(i<10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// for each loop
// todos.forEach(function(todo){
//     console.log(todo.text);
// });

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);
//Dinamik Element Silme

const todoList = document.querySelector("ul.list-group");
console.log(todoList);
console.log("------------------------------");
const todos = document.querySelectorAll("li.list-group-item"); // li elementlerini Array'a ekleme

console.log(todos);
console.log("------------------------------");

//Remove metodu

//todos[1].remove();


//console.log(todos);
//console.log("------------------------------");


//Remove Child metodu
//todoList.removeChild(todoList.lastElementChild);    // last child silinecek
todoList.removeChild(todos[3]);    // last child silinecek

console.log(todos);
console.log("------------------------------");

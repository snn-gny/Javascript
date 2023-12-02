let value;

const toDoList =document.querySelector(".list-group")
//const todo = document.querySelector(".list-group :nth-child(2)");
const todo = document.querySelector('.list-group-item:nth-child(2)');
const cardrow =document.querySelector(".card.row");

value =toDoList;
console.log(value);
console.log("-----------------------------");

value =todo;
console.log(value);
console.log("-----------------------------");

value =cardrow;
console.log(value);
console.log("-----------------------------");


//Child Nodes metodu satir atlamalari da dahil diyor. Bu yüzden children metodu daha iyi sonuc verir

value =toDoList.childNodes;
console.log(value);

value =toDoList.childNodes[0];

console.log(value);
console.log("-----------------------------");

//Children Metodu

value =toDoList.children;
console.log(value);

value =toDoList.children[0];
value =toDoList.children[1];
value =toDoList.children[2];
value =toDoList.children[toDoList.children.length-1];


value =toDoList.children[1].textContent = "New Todo ";
value =toDoList.children[1].innerHTML = "New Todo 1 ";


value =cardrow.children;
value =cardrow.children[2].children[1].textContent = "ToDo Listesi";
console.log(value);
value =cardrow.children[2].querySelector("#tasks-title");


console.log(value);
console.log("-----------------------------");

value = toDoList.children[0];
console.log(value);
value = toDoList.firstElementChild;


console.log(value);
console.log("-----------------------------");

value = toDoList.children[3];
console.log(value);
value = toDoList.lastElementChild;


console.log(value);
console.log("-----------------------------");

value = toDoList.children.length;
value = toDoList.childElementCount;
console.log(value);
console.log("-----------------------------");



value = cardrow;
value = cardrow.parentElement;
console.log(value);
console.log("-----------------------------");


value = cardrow;
value = cardrow.parentElement.parentElement;
console.log(value);
console.log("-----------------------------");

// Element Kardesleri


value = todo;
value = todo.previousElementSibling;  //Sibling ile bir önceki kardes elemente gider
value = todo.nextElementSibling;  //Sibling ile bir sonraki kardes elemente gider
value = todo.nextElementSibling.nextElementSibling;  //Sibling ile iki sonraki kardes elemente gider
console.log(value);
console.log("-----------------------------");
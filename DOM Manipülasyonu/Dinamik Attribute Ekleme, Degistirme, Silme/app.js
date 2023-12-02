//    Dinamik Attribute Ekleme, Degistirme, Silme

// Input üzerinde Attribute Ekleme, Degistirme, Silme
//<input class="form-control" type="text" name="todo" id = "todo" placeholder="Bir Todo Girin">

const todoInput =document.querySelector("#todo");
//const todoInput =document.getElementById("todo");

let element;

element =todoInput;


console.log(element.getAttribute("class"));
//console.log(element);
console.log("---------------");
console.log(element.getAttribute("id"));
//console.log(element);
console.log("---------------");
console.log(element.getAttribute("placeholder"));

//console.log(element);
console.log("---------------");console.log(element.getAttribute("name"));
//console.log(element);
console.log("---------------");

element = todoInput;
element = todoInput.classList;  // form-control  yanina 2 cals daha acacagiz

// 1. Yol
//todoInput.className ="form-control newClas new Class2";

// 2.Yol
todoInput.classList.add("newclass");
todoInput.classList.add("newclass2");
//form-control clasName Silme
todoInput.classList.remove("form-control");

element = todoInput;
console.log(element);
console.log("---------------");


console.log(element.getAttribute("placeholder")); 
element = todoInput.ariaPlaceholder; // veya yukaridaki gibi
todoInput.setAttribute("placeholder"," Yeni bir Todo Giriniz...");

element = todoInput;
todoInput.setAttribute("title"," Input");
console.log(element.getAttribute("title"));


element = todoInput;
console.log(element);
console.log("---------------");

element = todoInput;  // Bir attribute sahip olup olmadigini ögrenme
element = todoInput.hasAttribute("name");  // Bir attribute sahip olup olmadigini ögrenme true oder false
console.log(element);
element = todoInput.hasAttribute("required");  // Bir attribute sahip olup olmadigini ögrenme true oder false

console.log(element);
console.log("---------------");

//Bir Attribute Silme : name
element = todoInput;
element = todoInput.removeAttribute("name");

element = todoInput;

console.log(todoInput);
console.log("---------------");

element = todoInput;
element = todoInput.removeAttribute("title");  // title Attribute silindi

element = todoInput;

console.log(todoInput);
console.log("---------------");
// Elementi ID ye göre secme
let element;
/*
element = document.getElementById("todo-form");

console.log(element);
console.log("----------------------------------");

element = document.getElementById("tasks-title");

console.log(element);
console.log("----------------------------------");
*/
// Element Class'a göre secme

/*
element = document.getElementsByClassName("list-group-item");

console.log(element);
console.log("----------------------------------");

element = document.getElementsByClassName("list-group-item")[0];

console.log(element);
console.log("----------------------------------");

element = document.getElementsByClassName("list-group-item")[1];

console.log(element);
console.log("----------------------------------");

element = document.getElementsByClassName("list-group-item")[2];

console.log(element);
console.log("----------------------------------");

element = document.getElementsByClassName("list-group-item")[3];

console.log(element);
console.log("---xxxxxxxxxxx------------xxxxxxxxx----");

element = document.getElementsByClassName("card-header");

console.log(element);
console.log("----------------------------------");

element = document.getElementsByClassName("card-header").length;

console.log(element);
console.log("----------------------------------");

element = document.getElementsByClassName("card-header")[0];

console.log(element);
console.log("----------------------------------");
*/

// Element Tag'a göre secme (<head> , <p> ,<a>, <h1>... gibi)

/*
element =document.getElementsByTagName("li").length;

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("li");

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("li")[0];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("li")[1];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("li")[2];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("li")[3];

console.log(element);
console.log("----------------------------------");


element =document.getElementsByTagName("div").length;

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div");

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div")[0];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div")[1];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div")[2];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div")[3];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div")[4];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div")[5];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div")[6];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div")[7];

console.log(element);
console.log("----------------------------------");

element =document.getElementsByTagName("div")[8];

console.log(element);
console.log("----------------------------------");
*/

//Query Selector - CSS Selector Birden fazla elementin oldugunda ilk buldugu elementi secer

/*
element =document.querySelector("#todo-form");

console.log(element);
console.log("----------------------------------");

element =document.querySelector(".list-group-item");

console.log(element);
console.log("xxxxxxx-------xxxxxxxx---------xxxxxx");

element =document.querySelector("h5");

console.log(element);
console.log("----------------------------------");
*/

//QuerySelectorAll - Tüm Elementleri Secer

element = document.querySelectorAll(".list-group-item");
/*
console.log(element);
console.log("----------------------------------");

element = document.querySelectorAll(".list-group-item").length;

console.log(element);
console.log("----------------------------------");

element = document.querySelectorAll(".list-group-item")[0];

console.log(element);
console.log("----------------------------------");

element = document.querySelectorAll(".list-group-item")[1];

console.log(element);
console.log("----------------------------------");

element = document.querySelectorAll(".list-group-item")[2];

console.log(element);
console.log("----------------------------------");
element = document.querySelectorAll(".list-group-item")[3];

console.log(element);
console.log("----------------------------------");
*/

element.forEach(function(el){
    console.log(el);
});

//console.log(el);

// Elementi ID ye göre secme
const element = document.getElementById("clear-todos");

// Element Özellikleri

console.log(element.getAttributeNames());
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.classList[1]);
console.log(element.href);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.style);
console.log(element);

console.log(element.href);
console.log("................................................");


// Style ve Element Özelliklerini Degistirme

console.log(element.style);
element.className = "btn btn-primary";
element.style.color ="#000";
element.style.fontSize ="1.3em";
element.style.fontStyle ="Open-Sans";
element.style.marginLeft ="2em";
element.href = "https://www.google.com" ;
element.target = "_blank";
element.textContent ="Lütfen silmeden önce kontrol ediniz...";
element.innerHTML ="<span style ='color:yellow' > Tüm ToDo'lari Silin</span>";
console.log("................................................");

const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(el){
    el.style.color ="red";
    el.style.background ="#f2f2f2";
})
console.log(elements);
console.log("................................................");


let element2 = document.querySelector("li");

element2 = document.querySelector("li :nth-child(1)");
element2 = document.querySelector("li :nth-child(1)");
element2 = document.querySelector("li :nth-child(2)");
element2 = document.querySelector("li :nth-child(3)");
element2 = document.querySelector("li :nth-child(4)");

element2 = document.querySelectorAll("li:nth-child(odd)");
element2.forEach(function(el){
    el.style.color ="blue";
    el.style.background ="#ce6ece";
})

element2 = document.querySelectorAll("li:nth-child(even)");
element2.forEach(function(el){
    el.style.color ="red";
    el.style.background ="#ccc";
})
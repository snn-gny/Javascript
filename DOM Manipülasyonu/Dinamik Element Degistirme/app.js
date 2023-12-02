// REPLACE     Dinamik Element Degistirme

// card-body icindeki h5 elementini h3 elementiyle degistirecegiz
//  <h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardbody = document.querySelectorAll(".card-body")[1];

console.log(cardbody);
console.log("-------------------------------------");

//New element olusturalim
const newElement =document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent ="Yeni ToDo'Lar";    //Text olustur

console.log(newElement);
console.log("-------------------------------------");


//Eski Elemnti sec
const oldElement =document.querySelector("#tasks-title"); 
cardbody.replaceChild(newElement,oldElement);

console.log(cardbody);
console.log("-------------------------------------");

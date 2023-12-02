// Yeni Element Olusturma  

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newlink =document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

//link e id verme
newlink.id ="clear-todos";
newlink.className ="btn btn-warning";
newlink.href ="https://www.udemy.com";
newlink.target ="_blank";

// Text Content ile a linkine text ekleme
//newlink.textContent ="Udemy'e Git";
//bu sekilde text eklemek riskli bu yüzden textNode ile yapmak daha güvenli

//Text Node
const text =document.createTextNode("Udemy'e Güvenli Git");
// son child olarak text'i ekle
//cardbody.appendChild(text);
newlink.appendChild(document.createTextNode("Udemy'e Güvenli Git"));

console.log(newlink);

cardbody.appendChild(newlink);

cardbody.appendChild(newlink).style="margin-left : 20%";
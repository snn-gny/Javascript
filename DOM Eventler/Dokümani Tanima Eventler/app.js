
// Filtre elemntindeki eventleri bulma ve bunlarla islem yapma

const filterInput = document.getElementById("filter");  // Bu bölüme tiklayinca Focus eventini yakalayabiliriz
// bu sekilde event yakalanmis oluyor

/*
filterInput.onfocus = function(){
    console.log("Merhaba");
} 

let counter = 0;
// diger Yöntem ise:

filterInput.addEventListener("focus",function(e){


    // Her tıklamada counter'ı artır
    
    counter++;
    if (counter > 2) {
        console.log("ToDo listesi doldu");
    } else {
        console.log("ToDo listesine ulaşılmadı. Şu anki counter değeri: " + counter);
    }
    

    console.log(e);  // Event
    console.log(e.type);   // Event tipi
    console.log(e.target);   // Event olustugu yer
    console.log(e.target.className);  
    console.log(e.target.placeholder);  
   // console.log("Merhaba");
});
*/


/*
console.log(filterInput);
console.log("--------------------");
console.log("--------------------");
console.log("--------------------");

*/
/*
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);
function submitForm(e) {
        console.log("Submit eventi");

        e.preventDefault();
}
*/

const bttn = document.getElementsByClassName("btn btn-primary");

for (let i = 0; i < bttn.length; i++) {
    bttn[i].addEventListener('click', function (e) {
        i++;
        

        if (i > 3) {
            this.style.background = "black";
        }
        e.preventDefault();
    });
}

/*
let counter = 0;  // Ensure counter is declared and initialized outside

const bttns = document.getElementsByClassName("btn btn-primary");

for (let i = 0; i < bttns.length; i++) {
    bttns[i].addEventListener('click', function (e) {
        counter++;
        e.preventDefault();

        if (counter > 3) {
            this.style.background = "black";
        }
    });
}
*/


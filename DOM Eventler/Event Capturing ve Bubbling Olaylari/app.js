//Event Bubbling  => Olay köpürmesi
/*
Event icin bir element secilince onun eltern(parent) elementleri de event etkilesimine gecer, buna event bubbling denir

                ------------------------
h5 ' te yapilan click event, card-body, card-header, card row ve container ' e kadar uzayabilir 

*/
/*
document.addEventListener("DOMContentLoaded", function() {
    // JavaScript kodları buraya gelir

    const myElement = document.querySelector(".container");
    myElement.addEventListener("click", function() {
        // Olay dinleyici kodları buraya gelir
        console.log("Div Container");
    });

    // JavaScript kodları buraya gelir
    const cardRow = document.querySelector(".card.row");
    cardRow.addEventListener("click", function() {
        // Olay dinleyici kodları buraya gelir
        console.log("Div CardRow");
    });

    // JavaScript kodları buraya gelir
    const cardBody = document.querySelectorAll(".card-body")[1];
    cardBody.addEventListener("click", function() {
        // Olay dinleyici kodları buraya gelir
        console.log("Div CardBody");
    }); 
});

*/

//Event Capturing veya Delegation  => Olay Yakalama 
/*
Event icin parent bir element secilince onun child elementleri de event etkilesimine gecer, buna event apturing denir

                ------------------------

container ' te yapilan click event, card row , card-header, card-body ve  h5' e kadar uzayabilir  Bubbling'in tersi

*/

document.addEventListener("DOMContentLoaded", function() {
   
    // JavaScript kodları buraya gelir
    const cardBody = document.querySelectorAll(".card-body")[1];
    cardBody.addEventListener("click", function(e) {
        // Olay dinleyici kodları buraya gelir
        //console.log(e.target);
            if(e.target.className === "fa fa-remove"){
                console.log("Silme islemi");
                //alert("Silme islemi");
            }
            if(e.target.id=== "filter"){
                console.log("Filtre islemi");
            }
            if(e.target.id === "clear-todos"){
                console.log("Tüm Tasklari sil");
            }
        
    });
    
});


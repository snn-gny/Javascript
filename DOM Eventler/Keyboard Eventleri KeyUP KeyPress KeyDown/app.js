// Klavye Eventleri
/*
//Keypress       => Sadece harf ve sayilar icin event olusturur
document.addEventListener("keypress",run);
function run(e){
    console.log(e.which);  // Basilan tusun ascii degerini yazdirir 0 -255 arasi
    console.log(e.key);
    console.log("Merhaba Welt!");
}




//Keydown   => Klavyedeki basilan tüm tus eventlerini algilar
document.addEventListener("keydown",run1);
function run1(e){
    console.log(e.which);  // Basilan tusun ascii degerini yazdirir 0 -255 arasi
    console.log(e.key);
    console.log("Merhaba Welt!");
}



//Keyup   => Klavyedeki basilan tusu birakinca olusan eventler
document.addEventListener("keyup",run2);
function run2(e){
    console.log(e.which);  // Basilan tusun ascii degerini yazdirir 0 -255 arasi
    console.log(e.key);
    console.log("Merhaba Welt!");
}
*/
// SAYFADAKI "BIR tODO GIRIN" BÖLÜMÜNE GIRIS YAPINCA "TODO lIST" BÖLÜMÜNDE EVENT OLMASI

//Önce Bir Todo Girin bölümünü sec
const header =document.querySelector(".card-header");
const todoInput =document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);
function changeText(e){
    //console.log(e.key);
    //console.log(e.target);  // Event in olustugu yeri gösterir
    console.log(e.target.value);  // olusan Event i almayi saglar gösterir
    header.textContent = e.target.value;

    //console.log("Merhaba Dünyali!");
}

console.log(header);
console.log(todoInput);
//DOMContentLoaded eventi => Sayfadaki hersey yüklendikten sonra olusan event sayfanin tamaminin yüklenmesiyle javascriptin daha iyi sonuc vermesi icin kullanilabilir.
/*
document.addEventListener("DOMContentLoaded", load);
function load(e){
    console.log("Sayfa yüklendi");
    
}
*/

// Input Eventleri

//Focus - Blur Eventi
/*
const filter = document.querySelector("#filter");
filter.addEventListener("focus",run);
filter.addEventListener("blur",run);
function run(e){
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.value);
}
*/
//console.log(filter);

// Cut - Copy - Paste Eventi

filter.addEventListener("cut",run);
filter.addEventListener("copy",run);
filter.addEventListener("paste",run);

function run(e){
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.value);
}

//console.log(filter);

// Select Eventi

filter.addEventListener("select",run);

function run(e){
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.value);
}

//console.log(filter);



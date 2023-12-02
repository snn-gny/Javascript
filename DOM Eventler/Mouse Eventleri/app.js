// Mouse Eventleri

const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

console.log(cardBody);
console.log(title);

//Yukaridaki secili ögeler üzerinden Click eventlere bakalim

// Mouse Click Event

title.addEventListener("click",run);
function run(e){
    console.log(e.type);
    console.log(e.target);
}; 

// Mouse Double Click Event

title.addEventListener("dblclick",run);
function run(e){
    console.log(e.type);
    console.log(e.target);
};   

// Mouse Down Event  => Click eventiyle ayni click kullanilabilir
/*
title.addEventListener("mousedown",run);
function run(e){
    console.log(e.type);
    //console.log(e.target);
};
*/
/*
// Mouse Up Event  => Mouse dan tiklamayi kaldirinca olusur

title.addEventListener("mouseup",run);
function run(e){
    console.log(e.type);
    //console.log(e.target);
};

// Mouse Over Event  => Mouse üstüne gelince olusur

title.addEventListener("mouseover",run);

function run(e){
    console.log(e.type);
    //console.log(e.target);
}

// Mouse Out Event  => Mouse 'un üzerinden ayrilinca olusur

title.addEventListener("mouseout",run);

function run(e){
    console.log(e.type);
    //console.log(e.target);
}

// Mouse Over - Out birden cok öge barindiran yerde yapilirsa ögeler arasi  geciste  mouseover ve mouseout olur

cardBody.addEventListener("mouseover",run);
cardBody.addEventListener("mouseout",run);
function run(e){
    console.log(e.type);
    //console.log(e.target);
}
*/
// Mouse Enter - Mouse Leave => mouseover ve mouseout ' a benziyor ancak ögeden cikinca enter ve leave gerceklesiyor

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);
function run(e){
    console.log(e.type);
    //console.log(e.target);
}
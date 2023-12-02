// Scope Kavrami
/* 3 tür scop vardir. 
1. Global Scope : Herhangi bir fonksiyon icinde olmayan bölüm

2.Function Scope : Fonksiyon icinde olan bölüm
function a(){
    Function Scope
}

3.Blok Scope : if(), while() gibi bolklar icinde olan scope lardir 
if(){
    Block Scope
}

*/ 
var value1 = 10;
let value2 = 20;
const value3 = 30;
// Yukarisi Global Scope
console.log(value1,value2,value3);

/*
function Func(){
    var value1 = 40;
let value2 = 50;
const value3 = 60;
console.log(value1,value2,value3);
}
Func(); // Fonksiyonun icinde fonksiyona göre value1,value2,value3 degerleri olusturuldu. bunlar Function Scope olur Sadec fonksiyonun icinde gecerlidir
*/
console.log("--------------------------");

if(true){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1,value2,value3);
}
console.log("--------------------------");
console.log(value1);
console.log(value2);
console.log(value3);
// var blok icinde ve disinda gecerli ve bu yüzden dikkat edilmeli. let ve const global ve blok scope larda sadece endi alaninda kullanilabliyor
console.log("--------------------------");
console.log(value1,value2,value3);



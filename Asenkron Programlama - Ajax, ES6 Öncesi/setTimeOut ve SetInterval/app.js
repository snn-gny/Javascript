// Set Timeout
/*
 setTimeout(function(){
     console.log("Naber");

 },5000);
*/



// Clear Interval
/*
 let i = 0;
 let value = setInterval(function(){
     i++;
     console.log("Sayı:",i);

 },1000);
 document.getElementById("btn").addEventListener("click",function(){
     clearInterval(value);

 });
*/


let i = 0;
let intervalId;

document.getElementById("btn1").addEventListener("click", function () {
    intervalId = setInterval(function () {
        i++;
        document.getElementById("sayi").innerText = "Sayı: " + i;
        console.log("Sayı:", i);
    }, 1000);
});

// İlgili düzeltme burada
document.getElementById("btn").addEventListener("click", function () {
    if (intervalId) {
        clearInterval(intervalId);
    }
});


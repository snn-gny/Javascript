/* Windows Objelerini  ögrenme    : alert();    */
/*
console.log(this);

console.log(this.alert("selam"));

console.log(window);

alert("Guten Tag!"); 
*/
/*
 Birseyi onaylamak icin kullanilan  confirm metodu

const cevap = confirm("Emin misiniz?");  //ok deyince true dönüyor
console.log(cevap);    

const devam = confirm("Devam etmek istiyor musunuz?");  //ok deyince true dönüyor
console.log(devam);


if(confirm("Silmek istediginizden emin misiniz?")){
    console.log("Bu datayi siliniz...");
}
else {
    console.log("Bu datayi silmeyin...");
}

*/

//Promt() metoduyla input alma
/*
const cevap = prompt("2 + 2 = ? ")
//console.log(cevap);

if(cevap == 4){
    console.log("Cevabiniz dogru");
}
else {
    console.log("Cevabiniz yanlis");
}
*/

/*  location ve confirm metodunun kullanimi 

let value;
value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;


if(confirm("Sayfa yenilensin mi?")){
    window.location.reload();
}
else{
    console.log("Sayfa yenilenmedi");
}

*/
/*
value = window.outerHeight;
console.log(value);

value1 = window.innerHeight;
console.log(value1);

value2 = window.outerWidth;
console.log(value2);

value3 = window.innerWidth;
console.log(value3);
*/

value = window.scrollX;
console.log(value);
value = window.scrollY;
console.log(value);
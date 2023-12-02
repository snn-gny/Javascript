let value;

//Veri tiplerini String'e cevir
/*
value = 123;
console.log(value);
console.log(typeof value);

value = String(123);  //Sayi, String'e dönüstü
console.log(value);
console.log(typeof value);

value = String(3.14);  //Sayi, String'e dönüstü
console.log(value);
console.log(typeof value);

value = String(true);  //Boolean, String'e dönüstü
console.log(value);
console.log(typeof value);

value = String(false);   //Boolean, String'e dönüstü
console.log(value);
console.log(typeof value);

value = String(function(){console.log()});   //function, String'e dönüstü
console.log(value);
console.log(typeof value);


value = String([1,2,3,4]);   //Array, String'e dönüstü
console.log(value);
console.log(typeof value);

// toString kullanma

value = (10).toString();
console.log(value);
console.log(typeof value);

value = (3.14).toString();
console.log(value);
console.log(typeof value);

*/

//Veri tiplerini Sayilara cevir
/*
value = Number("123");
console.log(value);
console.log(typeof value);

value = Number(null);
console.log(value);
console.log(typeof value);


value = Number(undefined);  // bu deger sayiya cevrilemez
console.log(value);
console.log(typeof value);

value = Number("Hello World"); // bu deger sayiya cevrilemez
console.log(value);
console.log(typeof value);

value = Number(function(){console.log()});   //function, String'e dönüsmez
console.log(value);
console.log(typeof value);


value = Number([1,2,3,4]);   //Array, String'e dönüsmez
console.log(value);
console.log(typeof value);

// parseInt, parseFloat vb metodlari kullanma
value = Number("3.14");
value =parseFloat("3.14");
console.log(value);
console.log(typeof value);

value = Number("33");
value =parseInt("33");
console.log(value);
console.log(typeof value);
*/

//OTOMATIK CEVIRME

const a = "Hello" + 34; //String ile sayiyi yan yana yazar, toplamaz. Tip olarak String'e dönüsür

console.log(a);
console.log(typeof a);

const b = 34 + "Hello"; //String ile sayiyi yan yana yazar, toplamaz. Tip olarak String'e dönüsür

console.log(b);
console.log(typeof b);

const c = 34 +Number("52"); //String'i sayiya dönüstürür, islemi yapar ve  Tip olarak numbere dönüsür

console.log(c);
console.log(typeof c);

const d = parseInt("52")+99.99; //String'i sayiya dönüstürür, islemi yapar ve  Tip olarak numbere dönüsür

console.log(d);
console.log(typeof d);
//Degisken Olusturma
/*var a= 20;

var b = 10;
var c = 40;

console.log(a,b,c); */

//Primitive Veri Tipleri
/*
//Number Veri Tipi
var a = 10;
var b = 3.14;

console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);

//String Veri Tipi
var name = " Ali";

console.log(name);
console.log(typeof name);

//Boolean Veri Tipi
var x = true;
console.log(x);
console.log(typeof x);

//Null Veri Tipi
var a = null;

console.log(a);
console.log(typeof a);   */

// undefined Veri Tipi

var a;

//a = 10;   //bir deger atanmadigi icin tanimlanamadi.
console.log(a);



//Reference Veri Tipleri


// Array
var numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers);
console.log(typeof numbers);

//Object Olusturma

var Person = {
    name: "Ali",
    age:20,
    adress:"Istanbul"
}

console.log(Person);
console.log(Person.name);

console.log(typeof Person);


//Date Object Olusturma

var date = new Date();
console.log(date);
console.log(typeof date);

//Fonksiyon Tanimlama

var merhaba = function () {
    console.log("Merhaba");
}

console.log(merhaba);
console.log(typeof merhaba);

//Primitive -Reference Farki

var a = 10;

var b = a;

a = 20;
console.log(a,b); //a'nin degeri degistigi halde b hala 10 olarak kaldi. bu Primitive 

var x =[1,2,3];
var y =x;
x.push(4);
console.log(y);  // x, y'ye esitlendi ve x'e baska deger eklendi. y, x'in referans noktasina esitlendigi icin x'te olan degisiklikler y'de de oldu.

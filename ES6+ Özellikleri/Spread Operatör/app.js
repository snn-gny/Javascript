//  Spread Operatör

const langs =["Python","Java","C#","Php"];

console.log(langs); // Array'in elemanlarini yazdirma

console.log(langs[0],langs[1],langs[2],langs[3]);  //Array' elemanlarini yazdirma

console.log(...langs); // Spread yöntemiyle  Array'in elemanlarini yazdirma


//langs2 variablesine langs ögelerini ekleme
const langs2 = ["Javascript","C++",langs[0],langs[1],langs[2],langs[3]]; //Eski yöntem
console.log(langs2);

//Ayni isi Spread Operatör ile yapma
const langs3 = ["Javascript","C++", ...langs]; //Spread Operatör
console.log(langs3);

//-----------------------------------------------
const numbers = [1,2,3,4,5,6,,8,9];

const [a,b, ...number2] =numbers; 
console.log(a,b);
console.log(a);
console.log(b);
console.log(number2);
console.log(number2[0],number2[1],number2[2]);

//-----------------------------------------------

const addNumbers = (a,b,c) => console.log(a+b+c);    //Arrow ile fonksiyon yazildi

const numberss = [100,200,300]; //Array

addNumbers(...numberss);  // Fonksiyonun icinde Array Spread ile kullanildi
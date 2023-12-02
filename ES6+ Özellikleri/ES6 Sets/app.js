//  Setler => KÜMELER (Setler'de bir deger yalnizca 1 defa bulunabilir, tekrar edemez)

const myset = new Set();

myset.add(100);
myset.add(100);  // Ayni degeri 2.kez eklemedi ve hata da vermedi
myset.add(200);
myset.add(300);
myset.add(3.14);
myset.add("Murat");
myset.add(true);
myset.add([1,2,3]);
myset.add({ad:"Ali",yas:33});
//Farkli veri türlerinden degerler girilebiliyor
console.log(myset);
console.log("---------------------------------------------");

//daha kolay ekleme yapilabilir (Atama yaparken Array seklinde ögeler girilebilir)
const myset1 = new Set([100,200,300,3.14,"Mustafa",true,[1,2,3],{ad:"Ali",yas:33}]);

myset1.add("Öge ekleme");

console.log(myset1);
console.log("---------------------------------------------");

// Set' teki eleman sayisini  yazdirma

console.log(myset1.size);
console.log("---------------------------------------------");

// Set' teki elemanlari silme      Delete  
myset1.delete(("Öge ekleme"));
console.log(myset1);

console.log("---------------------------------------------");

// has Metodu bu öge sette var mi(onun elemani mi)  true oder false 

console.log(myset1.has([1,2,3])); //Non-Primitive oldugu icin false oldu
console.log(myset1.has(100));
console.log(myset1.has("Mustafa"));
console.log(myset1.has("Murat"));

console.log("---------------------------------------------");
console.log("for Each döngüsü mit Arrow");
//  For Each Döngüsü Arrow ile yazilmis

myset1.forEach(element => {  
    console.log(element);
});

console.log("x x x x x x x x x x x x x x x x x x x x x");
console.log("for Each  döngüsü  mit function");
//  For Each Döngüsü mit function

myset1.forEach(function(element){
    console.log(element);
});

console.log("---------------------------------------------");
console.log("for of  döngüsü ");
//  For of Döngüsü  

for(element of myset1){
    console.log(element);
};

console.log("---------------------------------------------");
console.log("for in  döngüsü ");
//  For in Döngüsü  cünkü iteral degil myset1 seti

for(element in myset1){
    console.log(element);
};

console.log("---------------------------------------------");
console.log("Set'lerden Array olusturma ");
//  Set'lerden Array olusturma

const array1 = Array.from(myset1);

console.log("array1 : " + array1);


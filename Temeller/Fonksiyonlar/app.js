// Ayni kodu tekrar tekrar kullanmak icin fonksiyonlar olusturulur ve u fonksiyon cagrilarak kod tekrar yazilmaz

//Fonksiyon Tanimlama
function merhaba(){
    console.log("Merhaba");
}

merhaba();  //fonksiyon Cagrisi (Funktion Rufen / Function Call)

//Parametre girme
function merhaba(name,age){
    console.log(`Isim: ${name} Yas: ${age}`);
}

merhaba("Ali",25);  
merhaba("Ayse",35);  

//Parametre girmeden ancak varsayilan verileri yazdirma

merhaba();
// Isim: undefined Yas: undefined ( undefined degerler yerine varsayilan degerleri yazdirma)

function merhaba(name,age){
    if(typeof name === "undefined") name = "Bilgi Yok";
    if(typeof age === "undefined") age = "Bilgi Yok";
    console.log(`Isim: ${name} Yas: ${age}`);
}

merhaba("Abla");

//varsayilan degerleri yazdirma kisayolu
function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){
  //  if(typeof name === "undefined") name = "Bilgi Yok";
  //  if(typeof age === "undefined") age = "Bilgi Yok";
    console.log(`Isim: ${name} Yas: ${age}`);
}

merhaba( );

// RETURN
// Normal fonksiyon
 /* function square (x){
    console.log( x * x );
}  */
// Return dönen Fonksiyon
function square (x){
    return( x * x );
}

// Normal fonksiyon
/* function cube(x) {
    console.log( x * x * x ); 
}  */
// Return dönen Fonksiyon
function cube(x) {
    return( x * x * x ); 
}

let a = cube(square(6));

console.log("a: " +a);

// Function Expression

const selam =function(name){
    console.log(`"Merhaba "${name}`);
}

//console.log(selam("Ali"));
selam("sen");

// Immediately Invoked Function Expression IIFE
// (Tanimlandigi yerde calisan fonksiyon)
(function(name){
    console.log(`"Merhaba "${name}`);
})("Ali");




const database = {
    host : "localhost",
    add : function () {
        console.log("Eklendi ");
    },
    get : function (id) {
        console.log(`Id: ${id} Ulasildi ` );
    },
    uptade : function (id) {
        console.log(`Id: ${id}  Güncellendi ` );
    },
    delete :function (id) {
        console.log(`Id: ${id} Silindi ` );
    }
}

console.log(database.host);
database.add(3);
database.get(5);
database.uptade(7);
database.delete(10);

console.log("---------------------------------------")
console.log(database.host);
database.add(9);
database.get(9);
database.uptade(9);
database.delete(9);
// Karsilastirma Operatörleri

//
// ==       :   iki degerin esitligini kontrol eder
// ===      :   iki degerin hem data türünü hem de esitligini kontrol eder
// ( != )
// ( !== )
// >
// >=
// <
// <=

// bu islemlerin sonunda true ya da false döner


console.log(2 == 2) // true
console.log("2" == 2) // true iki taraf da stringe cevrilir
console.log("js" == "java") // false

console.log("2" === 2) // false iki tarafin icerigi ayni ama data türü farkli

console.log(4 > 2) // true
console.log(4 < 2) // false
console.log(2 != 2) // false
console.log(2 < 4) // true
console.log(2 >= 4) // false
console.log(2 <= 2) // true


//----------------------------------------------------

// Mantiksal Baglaclar

// Not Opeatörü  =>  " ! "  bir degeri true iken false, false iken true yapar

console.log(2 == 2) // true iken
console.log(!(2 == 2)) // false
console.log((2 != 2)) // false
console.log(!(2 != 2)) // true iki kez terse cevirdik

// AND =>  &&   Operatörü  her iki tarafin da true olmasi gerekir. Eger ilk kisim false ise diger tarafi kontrole gerek yok zaten sonuc false
console.log((2 == 2) && ("Ali"=="Ali"))  //true
console.log((2 == 2) && ("Ali"=="Abi"))  //false
console.log((4 == 2) && ("Ali"=="Ali"))  //false


// OR => ||  Operatörü: Sonucun true olmasi icin taraflardan birinin true olmasi yeterli.
console.log((4 == 2) || ("Ali"=="Ali"))  //true
console.log((4 == 4) || ("Ali"=="Abi"))  //true
console.log((4 == 2) || ("Ali"=="Abi"))  //false


//-------------------------------------------

// IF ELSE IF  ELSE 

//if(kosul/*kosul dogruysa devam eder*/) {
//if block
//};


const error = false; //true;

if(error == true) {
console.log("Hata olustu.");
}
else{
    console.log("Hata olusmadi");
}

//-------------------

const user = "abd";

if (user === "abc") {
    console.log("Kullanici bulundu"); 
}else{
    console.log("Kullanici bulunamadi, lütfen kullanici olusturunuz");
}
//-------------------

const process = "6";

if (process === "1") {
    console.log("Islem 1");
} 
else if (process === "2") {
    console.log("Islem 2");
}
else if (process === "3") {
    console.log("Islem 3");
}
else if (process === "4") {
    console.log("Islem 4");
}
else {
    console.log("Gecersiz Islem ");
}

//-------------------

const number = 101;

if (number === 100) {
    console.log("Sayi 100'e esit");
} 
else {
    console.log("Sayi 100'e esit degil");
}

//-------------------

//if else  {} kulanmadan da yazilabilir
if (number === 100) 
    console.log("Sayi 100'e esit");
else 
    console.log("Sayi 100'e esit degil");

//-------------------

//Ternary Operatörü
console.log(number === 100 ? "Sayi 100'e esit" : "Sayi 100'e esit degil" );
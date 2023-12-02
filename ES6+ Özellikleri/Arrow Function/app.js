const merhaba = function(){
    console.log("Merhaba");
}
merhaba();


// Arrow Function

const selam = () => {
    console.log("Merhaba Arrow");
}
selam();

// Mit Parameter Arrow Function
//Tek parameter varsa () gerek yok, parameter yoksa veya birden fazlaysa () kullanilmali

// Tek islem varsa { } kullanmaya da gerek yok

const selam1 = (vorname) => {
    console.log("Merhaba ",vorname);
}
selam1("Ali");

selam1("Veli");

const selam2 = vorname => console.log("Merhaba ",vorname);
selam2("Kamil");

selam2("Murat");

//birden cok parametrede () kullanilir
const selam3 = (vorname, nachname) => console.log("Merhaba ",vorname,nachname);
selam3("Kamil","Yavuz");
selam2("Kamil","Yavuz");


//Küp fonksiyon rnegi
const cube = function(x) {
    return x * x * x ;
}
console.log(cube(5));

const cube1 = x => x * x * x;
console.log(cube1(6));

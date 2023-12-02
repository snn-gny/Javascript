// Var
/*
var a;

a = 20;
console.log(a);

var name ="Ahmet";

console.log(name);

name ="Ali";

console.log(name);
*/


//Let

let name ="Ahmet";
console.log(name);
//let name ="Ali";  //Bir  variable bir kez definied edilmisse tekrar basina let yazilamaz.

name ="Ali";
console.log(name);

let a,b;

a =10;
b =15;
console.log(a+b);


//const   = sabit // Variable verilen deger ilerde degistirilemez, baska deger atanamaz

const vorname = "Ahmet";
console.log(vorname);

// vorname ="Ali";

console.log(vorname); //const ile tanimlanan variable'a baska deger atanamaz. sabit degerler icin CONST kullanilir.

//const tipi degerler tanimlanirken deger atanmasi gerekir.

const q = 5;
//q=5;
console.log(q);

//Const ile bir Array tanimlanirsa buna deger eklenebilir ama tekrar atanarak yeni Array tanimlanamaz.

const dizi =[1,2,3,4,5];
console.log(dizi);
dizi.push(6);
console.log(dizi);

//dizi =[,2,3,4,5,6]; // bu sekilde tekrar atanamaz
console.log(dizi);
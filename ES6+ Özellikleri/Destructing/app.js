//Array' e atanan variableleri daha kolay tanimlayabiliriz

let number1 , number2;
arr = [100,200,300,400] ;
number1 = arr[0];
number2 = arr[1];
console.log(number1,number2);

//Destructing
/*
[number8,number9]=arr;
const [number8,number9]=arr;

console.log(number8,number9);
*/
//Obje Olusturma

const numbers ={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

//Objedeki ögeleri almak icin Objenin özellik isimlerini kullanmak gerekir

const {a, b, c} = numbers;
console.log(a,b,c);

const {a:number3, d:number4, e:number5} = numbers;
console.log(number3,number4,number5);


//Function Destructing

const getLangs = () => ["Python", "Java","C#"];

const [lang1,lang2,lang3] =getLangs();
console.log(lang1,lang2,lang3);



//Obje

const person = {
    name:"Mustafa",
    alt:33,
    gehalt:5000,
    anzeigenInfos : () => console.log("Bilgiler gösteriliyor")
}

const {name:isim, alt:yas,gehalt:maas,anzeigenInfos:bilgileriGoster} =person; 
console.log(isim,yas,maas);
bilgileriGoster();


 
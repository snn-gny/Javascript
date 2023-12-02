//   Map 'ler   - Key - Value   ( Key ve Value her türlü veri tipinden olabilir)

/*
let myMap = new Map();      // Map olusturma
console.log(typeof myMap);
console.log(myMap);

const key1 ="Mustafa";  // key => String
const key2 ={a:10,b:20};  // key => Obekt
const key3 = () => 2;  // key => Function

// Map element eklemek icin "set" kullanilir
//   SET Metodu

myMap.set(key1,"String Deger");
myMap.set(key2,"Objekt Literal Deger");
myMap.set(key3, "Function Deger");

// Map ' e  eklenen elementi getirmek icin "get" kullanilir
//   GET Metodu

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);


// Map boyutu 

console.log(myMap.size);


*/

const cities = new Map();  // yeni map olustu

cities.set("Ankara",5);
cities.set("Istanbul",18);
cities.set("Izmir",4);
cities.set("Bursa",3);

console.log(cities.size);

console.log(cities.get("Ankara"));

console.log("-----------------------------------------------");

//forEach ile map'te gezinme

cities.forEach(function(Value,key){
    console.log(key,Value);
})

console.log("-----------------------------------------------");

//for of ile map'te gezinme

for (let value of cities){
    console.log(value);
}  // ciktisi Array biciminde oldu.

console.log("-----------------------------------------------");

// Destructing ile array disinda normal cikti alinabilir
for (let [key,value] of cities){             
    console.log(key,value);
}

console.log("-----------------------------------------------");

// Map ' te key leri alma

for (let key  of cities.keys()){             
    console.log(key);
};

console.log("-----------------------------------------------");

// Map ' te value leri alma

for (let value  of cities.values()){             
    console.log(value);
};

console.log("-----------------------------------------------");

// Array ' den map olusturma

const array = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(array);

console.log(lastMap);

console.log("-----------------------------------------------");

// map ' den Array olusturma

const cities1 = new Map();
cities1.set("Ankara",5);
cities1.set("Istanbul",18);
cities1.set("Izmir",4);
cities1.set("Bursa",3);

const arrayy = Array.from(cities1);

console.log(arrayy);

console.log("-----------------------------------------------");
console.log("Array'in ciktisi'");
for(let a of arrayy){
    console.log(a);
}
console.log(arrayy);

console.log("-----------------------------------------------");


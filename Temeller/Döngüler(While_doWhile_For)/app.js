// While Döngüleri
/*
let i =0;

while( i < 10){ // Sonsuz döngüye girmemesi icin i artmali
    console.log(i);
    i++;
}

let j = 10;

while( j >= 0){ // Sonsuz döngüye girmemesi icin i artmali
    console.log(`j: ${j}`);
    // j--;
    j -= 2;
}
*/

/*
//Break ve Continue

let x =0;

while( x < 10){ // Break
    
    console.log(`x: ${x}`);
    if(x==3)        break;
    
    x++;
    
}


let a =0;

while( a < 10){ // Continue

   
     if(a==3 || a == 5){
        a++;                 // continue den önce artirma yapmak gerekir ki sonsuz döngüye girmesin
        continue;
    }
    console.log(`a: ${a}`);
   
    a++;
    
}


// Do While Döngüleri
let b = 0;

do{
console.log(b);
b++;
}while(b<10);

// Do While  Break Döngüleri
b = 0;

do{
console.log(b);
if(b == 7) break;
b++;
}while(b<10);


// Do While  Continue Döngüleri
b = 1;

do{
    if(b == 7 | b == 3) {
        b++;
        continue;
    } ;
console.log(`b: ${b}`);
b++;
}while(b<10);

*/
/*
// For Döngüleri

const langs = ["Pyhon","Java","C#","Javascript","CSS"];



for (let k = 0; k < langs.length; k++) {
     const element = langs[k];
     console.log(element) 
     //bir degisken atayarak da veya array biciminde yazdirilabilir
     console.log(langs[k])
       
}
console.log("-----------------------------------")



// Foreach döngüsü
langs.forEach(lang => {
    console.log(lang)
});


console.log("x x x x x x x x x x x x x x x")

// Foreach döngüsü diger yazim sekli ve index numarasiyla

langs.forEach(function(lang, index){
    console.log(lang,index)
});



console.log("-----------------------------------")

// MAP fonksiyonu

const users = [
    { name : "Ali", age: 25  },
    { name : "Zeki", age: 23 },
    { name : "Tarik", age: 30 }
]

const names = users.map(function(user){
        return user.name;
})
console.log(names)

const ages = users.map(function(user){
    return user.age;
})
console.log(ages);

*/

// Forin Döngüsü

const user = {
    name : "Ali",
    age : 25
};

for (let key in user) {
    console.log(key,user[key]);
}


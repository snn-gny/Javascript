//For in - For Of

const person = {
    name:"Mustafa Murat",
    age: 33,
    salary:5000
};


const langs =["Java","Python","C#","Php"];
const name1 ="Mustafa";

// For in döngüsü ile objenin özelliklerini yazdirma üzerinde gezinme

for(let prop in person){
    console.log(prop,person[prop]);
}

// For in  ile oArray'in özelliklerini yazdirma üzerinde gezinme 
for(let index in langs){
    console.log(index,langs[index]);
}

// For in  ile String'in özelliklerini yazdirma üzerinde gezinme

for(let alphabet in name1){
    console.log(alphabet,name1[alphabet]);
}

console.log("----------------------------------------------------------");


/// For of Döngüsü  : List ' ler (Array, node, string vb ) üzerinde gezer, Objenin özellikleri üzerinde gezemez.  
//iterable olmali yoksa for of calismaz. 

/*    obje  iterable olmadigi icin for of burada calismaz
for(let value of person){
    console.log(value,person[value]);
}
*/


// For of  ile oArray'in özelliklerini yazdirma üzerinde gezinme 
for(let value of langs){
    console.log(value);
}

// For of  ile String'in özelliklerini yazdirma üzerinde gezinme

for(let alphabet of name1){
    console.log(alphabet);
}


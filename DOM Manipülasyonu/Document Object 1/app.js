// Window  Object
let value;

value = document;
value = document.all;
value = document.all.length;
value = document.all[6];
value = document.all[document.all.length-1];


console.log(value);
console.log("----------------------------------");


//const elements = document.all;

/*
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    
}
*/

// document.all   bir Array olmadigi icin forEach direkt kullanilmaz ancak bunu Array'a cevirirsek forEach i kullanabiliriz
/*
const elements = document.all;
const collections = Array.from(document.all);
console.log(typeof collections);

collections.forEach(function(element) {
    console.log(element);
});
*/

value = document.all[8];
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;
value = document.URL;
value = document.characterSet;

console.log(value);
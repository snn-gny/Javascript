let value;

const programmer = {
    name : "Ahmet Yatar",
    age : 45,
    email : "yatarahmet@gmail.com",
    langs : ["Python","Java","Javascript","C#" ],
    address: {
        city :"Mannheim",
        street :"Berliner"
    },

    work : function(){
        console.log("Programci calisiyor...")
    }
}

value = programmer;
console.log(value);

//Objenin bir ögesine ulasmak icin 2 yöntem var:

value =programmer.email;
console.log(value);

value =programmer["email"];
console.log(value);


value =programmer.langs;
console.log(value);

value =programmer.address.street;
console.log(value);

value =programmer.work();



//------------------------------------------------------
//Birden fazla objeden olusan Arraylaerle islem yapma

const programmers = [
    {name : "Ali", age :25},
    {name : "Ahmet", age :25}
];

value = programmers[0];
console.log(value);
value = programmers[0].name;
console.log(value);

value = programmers[1];
console.log(value);
value = programmers[1].age;
console.log(value);
let value;

const numbers =[43,56,33,23,44,35,5];

const numbers2 = new Array(1,2,3,4,5,6);

const langs =["Python","Java","Javascript","C#"];

const a = ["Merhaba",22,null,undefined,3.14];

//Array uzunlugunu hesaplar
value =numbers.length; 
console.log(value);

//Istenilen index'i bulmak- yazdirmak icin
value =numbers[0];
console.log(value);

//Son index icin:
value =numbers[numbers.length-1];
console.log(value);

//Herhangi bir index teki degeri degistirme (2. indexi 1000 yaparsak:)
numbers[2]=1000;
value = numbers;
console.log(value);

//IndexOf verilen degerin indexini döner
value = numbers.indexOf(1000);
console.log(value);

//Array'in sonuna deger ekleme
numbers.push(999);
value = numbers;
console.log(value);

//Array'in basina deger ekleme
numbers.unshift(99);
value = numbers;
console.log(value);

//Array'in sonundaki deger silme
numbers.pop();
value = numbers;
console.log(value);

//Array'in basindaki deger silme
numbers.shift();
value = numbers;
console.log(value);


value = numbers;
console.log(value);
//Array'den indexi verilen degerleri silme(ilk verilenden baslar, 2.verilen sayi kadar siler)
numbers.splice(2,4);
value = numbers;
console.log(value);


value =langs;
console.log(value);
//Arrayleri terse cevirme

langs.reverse();
value =langs;
console.log(value);

value = numbers2;
console.log(value);
//Kücükten büyüge sirala
value = numbers2.sort(function(a,b){
    return a - b;
});
console.log(value);

//Büyükten kücüge sirala
value = numbers2.sort(function(a,b){
    return b - a;
});
console.log(value);
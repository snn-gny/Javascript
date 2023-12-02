let value;


const value1 = 10;

const value2 = 4;

//Aritmetik Operatörler
/*
value = value1 + value2;
console.log(value);

value = value1 - value2;
console.log(value);

value = value1 * value2;
console.log(value);

value = value1 / value2;
console.log(value);

value = value1 % value2;
console.log(value);
*/

//Math Objesi

value =Math.PI
console.log(value);

value = Math.round(3.4) //sayiyi virgülden sonraki bölüm 5 ve üstüyse yukari, 5'in altiysa asagi yuvarlar
console.log(value);


value = Math.ceil(3.3); //sayiyi her halükarda yukari yuvarlar
console.log(value);

value = Math.floor(3.8) //sayiyi her halükarda asagi yuvarlar
console.log(value);

value = Math.sqrt(169); //sayinin karekökünü hesaplar
console.log(value);
value = Math.sqrt(20); //sayinin karekökünü hesaplar
console.log(value);


value = Math.abs(-120); //Mutlak deger alma
console.log(value);
value = Math.abs(-1); //Mutlak deger alma
console.log(value);

value = Math.pow(8,3); //üs alma metodu 8'in 3. kuvvetini alir
console.log(value);

value = Math.pow(2,8); //üs alma metodu 2'nin 32. kuvvetini alir
console.log(value);

value = Math.max(2,8,12,1,9,158); //verilen degerlerin en büyügünü gösterir
console.log(value);


value = Math.min(2,8,12,1,9,158,0,-100); //verilen degerlerin en kücügünü gösterir
console.log(value);

value = Math.random(); //0 ile 1 (1 haric)arasi rastgele ayi üretir
console.log(value);

value = Math.random() * 20; //0 ile 20 arasi  (20 haric)rastgele ayi üretir (Istedigimiz degeri girebiliriz)
console.log(value);

value = Math.random() * 20 +1; //0 ile 20 (20 dahil) arasi rastgele ayi üretir (Istedigimiz degeri girebiliriz)
console.log(value);

//Integer sonuc istiyorsak:
value = Math.floor(Math.random() * 20 +1); //0 ile 20 (20 dahil) arasi rastgele ayi üretir (Istedigimiz degeri girebiliriz)
console.log(value);

value = Math.round(Math.random() * 20 +1); //0 ile 20 (21 dahil) arasi rastgele ayi üretir (Istedigimiz degeri girebiliriz)
console.log(value);

value = Math.ceil(Math.random() * 20 +1); //0 ile 20 (21 dahil) arasi rastgele ayi üretir (Istedigimiz degeri girebiliriz)
console.log(value);

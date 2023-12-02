let value;

const vorname = "Andreas";

const nachname = "Bersch";

const langs ="Java, Python,Javascript,C#";

value = vorname + nachname;
console.log(value);
value = vorname + " " + nachname;
console.log(value);

value += " in Maudach"
console.log(value);

// length => karakter sayisini verir
value = vorname.length; 
console.log(value);

// concat =>ekleme concat yöntemi
value =vorname.concat(" ").concat(nachname);
console.log(value); 

value =vorname.concat(" ",nachname," ","lebt"," ","in Maudach" );
console.log(value); 

//toLowerCase =>tüm  harfleri kücük yapma
value =vorname.toLowerCase(); 
console.log(value);

//toUpperCase =>tüm  harfleri büyük yapma
value =vorname.toUpperCase(); 
console.log(value);

value =vorname[0]; //istenen index'i yazdirma, kullanmak icin
console.log(value);
value =vorname[1]; //istenen index'i yazdirma, kullanmak icin
console.log(value);
value =vorname[2]; //istenen index'i yazdirma, kullanmak icin
console.log(value);
value =vorname[3]; //istenen index'i yazdirma, kullanmak icin
console.log(value);
value =vorname[4]; //istenen index'i yazdirma, kullanmak icin
console.log(value);
value =vorname[5]; //istenen index'i yazdirma, kullanmak icin
console.log(value);
value =vorname[6]; //istenen index'i yazdirma, kullanmak icin
console.log(value);

value =vorname[vorname.length - 1]; //istenen son index'i yazdirma, kullanmak icin
console.log(value);

//IndexOf =>istenen karakterin index'ini yazdirma, bulmak icin
value =vorname.indexOf("d"); //istenen karakterin index'ini yazdirma, bulmak icin
console.log(value);

value =vorname.indexOf("b"); //istenen karakterin index'ini yazdirma, bulmak icin deger yoksa -1 yazdirir
console.log(value);


//Char At =>girilen index'teki karakteri verir
value = vorname.charAt(2);
console.log(value);
//CharAt ie son index'teki degeri alma
value = vorname.charAt(vorname.length-1);
console.log(value);

//Split => Bölme, ayirma (, vb...)
const langss ="Java, Python,Javascript,C#";
value = langss.split(",");
console.log(value);

//Replace => yer/deger degistirme
value = langss.replace("Python","CSS");
console.log(value);

//Repeat => degeri tekrar ettirme
value = langss.repeat("CSS",);
console.log(value);

//Includes => icerigi kontrol etme
value = langss.includes("C#");
console.log(value);
value = langss.includes("C++");
console.log(value);

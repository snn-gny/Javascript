let value;


const now = new Date(); // Su anki zamani almamizi saglar
console.log(now);

//Istenilen tarih farkli formatlarda yazilabilir
//Istenirse gg/mm/YYYY ve saat/dakika/saniye yazilabilir
const date1 = new Date("09-19-1993 06:15:00");
console.log(date1);

const date2 = new Date("September 19 1993");
console.log(date2);

const date3 = new Date("9/19/1993");
console.log(date3);

//tarihten istenen verileri alma
value = date1.getMonth(); // 0'dan basladigi icin 8 gözüküyor  8+1
console.log(value)

value = date1.getDay(); //Pazar 0'dan basliyor
console.log(value)

value = date1.getDate();
console.log(value)

value = date1.getFullYear();
console.log(value)

value = date1.getHours();
console.log(value)

value = date1.getMinutes();
console.log(value)

value = date1.getTime();
console.log(value)

//Date Objesindeki bilgileri güncelleme veya degistirme

date1.setMonth(11); // 12. ay olarak güncellendi
value = date1;
console.log(value)

date1.setDate(15); // 15. gün olarak güncellendi
value = date1;
console.log(value)

date1.setFullYear(1995); // 1995 olarak güncellendi
value = date1;
console.log(value)
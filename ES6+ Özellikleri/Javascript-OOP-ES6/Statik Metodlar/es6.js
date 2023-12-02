// Statik Metodlar


class Matematik {
    sqrt(x){
        console.log(x*x);
    }
    static cube(x) {
        console.log(x*x*x);
    }
}
 const math = new Matematik(); /* Statik olmayan metotlar yeni bir obje olusturarak kullanilmalidir */
 math.sqrt(4);

 Matematik.cube(3);  /* Statik metotlar class ismiyle beraber kullanilmalidir */
 console.log(math);

 math.sqrt(4);      
 //Matematik.sqrt(5);   //Statik metot olmadigi icin class adiyla kullanilamaz
 Matematik.cube(5);   //Statik metot oldugu icin class adiyla kullanilabilir

 //Object.create();

console.log(Math.sqrt(4));
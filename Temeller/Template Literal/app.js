
const name1 ="Ahmet Aydin";
const department = "Yazilim";
const salary = 5000;

//Bu datalari tek Stringde tutmak icin:
const a ="Isim: " + name1 +"\n"+"Departman: " + department + "\n" + "Maas: " + salary ;
console.log(a);

//Bu islemi Temlate Literal ile de yapariz:

const b =`Isim: ${name1}\nDepartman: ${department}\nMaas: ${salary}`;
console.log(b);

//Bu datalari html eklemek icin eski ve yeni yöntem:
//Eski yöntem:

const html1 ="<ul>" +
             "<li>"+ name1 + "</li>" +
             "<li>"+ department + "</li>" +
             "<li>"+ salary + "</li>" +
             "</ul>";

//document.body.innerHTML =html1;

function selam(){
    return "Merhaba";
}

//Yeni yöntem: Template Literal

const html2 = `
      <ul>
        <li>${name1}</li>
        <li>${department}</li>
        <li>${salary}</li>
        <li>${10 % 4 }</li>
        <li>${selam() }</li>
      </ul> 
      `;
      
      document.body.innerHTML =html2;




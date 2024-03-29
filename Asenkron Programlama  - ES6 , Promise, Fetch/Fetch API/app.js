function getTextFile(){ // Text Dosyası

    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
function getJsonFile(){ // Local bir Json Dosyasından Veri Alma

    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        /*console.log(data); // API yanıtını logla
        console.log(data.rates.USD);*/
        if (data && data.rates && data.rates.USD) {
            console.log(data.rates.USD);
        } else {
            console.log("Beklenen veri bulunamadı.");
        }
    })

    .catch(err => console.log(err));
}
// getTextFile();
// getJsonFile();
 getExternalAPI();

// https://api.exchangeratesapi.io/latest



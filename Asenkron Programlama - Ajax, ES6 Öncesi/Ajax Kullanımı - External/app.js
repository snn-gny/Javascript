document.getElementById("change").addEventListener("click",change);


/* */
function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");

    xhr.onload = function(){
        if(this.status) {
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText);

            const rate = response.rates.TRY
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;

        }

    }

    xhr.send();
    

}
/**//*
// app.js

class ExchangeRateRequest {

    getExchangeRates(baseCurrency) {
        const apiUrl = `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`;

        return new Promise((resolve, reject) => {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => resolve(data.rates))
                .catch(err => reject(err));
        });
    }

    // Eğer bir değişiklik yapılacaksa, bu fonksiyon üzerinden yapılabilir.
    // Ancak, bu örnekte ayrı bir fonksiyon kullanmaya gerek yok gibi görünüyor.
    // Ayrıca, "change" fonksiyonunun ExchangeRateRequest sınıfında tanımlı olmadığına dikkat edin.
    // change(baseCurrency) {
    //     return this.getExchangeRates(baseCurrency);
    // }
}

const exchangeRateRequest = new ExchangeRateRequest();

$(document).ready(function () {
    $('#change').click(function () {
        const amount = $('#amount').val();
        const baseCurrency = 'EUR';

        exchangeRateRequest.getExchangeRates(baseCurrency)
            .then(rates => {
                // rates nesnesini kontrol et
                if (rates && rates['TRY'] !== undefined) {
                    const tlAmount = amount * rates['TRY'];
                    $('#tl').val(tlAmount.toFixed(2)); // TL miktarını 2 ondalık basamakla göster
                } else {
                    // API'den gelen yanıt hatalı veya eksikse
                    console.log('Döviz kuru bilgisi bulunamadı veya TRY bilgisi eksik.');
                }
            })
            .catch(err => {
                // fetch veya diğer hata durumları
                console.log('Döviz kuru bilgisi alınamadı. Hata:', err);
            });
    });
});

*/
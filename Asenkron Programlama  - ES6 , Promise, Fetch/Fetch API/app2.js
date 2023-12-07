
function getExternalApi() {
    fetch('https://api.apilayer.com/currency_data/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01', {
      method: 'GET',
      headers: {
        'apikey': '6uyEYinrtsVjAxN7DIR59dhQ7ki4gePH'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.rates && data.rates) {
          console.log(data.rates);
        } else {
          console.log(' rate not available in the response.');
        }
      })
      .catch(err => console.log(err));
  }
  
  getExternalApi();
  

  console.log("---------------------------------------");
  
  function getInternalText() {
    fetch("example.txt")
      .then(response => response.text()) // response.text() fonksiyonunu doğrudan çağırmayın
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  
  getInternalText();
  
  console.log("---------------------------------------");
  
  function getInternalJSON() {
    fetch("example.json")
      .then(response => response.json()) // response.json() fonksiyonunu doğrudan çağırmayın
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  
  getInternalJSON();
  
  console.log("---------------------------------------");
  

  var myHeaders = new Headers();
  myHeaders.append("apikey", "6uyEYinrtsVjAxN7DIR59dhQ7ki4gePH");
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  }; 
  function getexternalJsonAPI_1(){
  fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=TRY&base=EUR", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  getexternalJsonAPI_1();

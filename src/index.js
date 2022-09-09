import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './currency-exchange.js';

function getExchange() {
  let promise = ExchangeService.getExchange();
  promise.then(function(data) {
    printElements(data);
  // }, function(errorArray) {
  //   printError(errorArray);
  });
  }

  // ui
  function printElements(data) {
    const currencySelection = document.getElementById("currency-selection").value;
    const AED = document.getElementById("dollar").value * `${[data[0].conversion_rates.AED]}`
    const AFN = document.getElementById("dollar").value * `${[data[0].conversion_rates.AFN]}`
    const ALL = document.getElementById("dollar").value * `${[data[0].conversion_rates.ALL]}`
    const AMD = document.getElementById("dollar").value * `${[data[0].conversion_rates.AMD]}`
    const ANG = document.getElementById("dollar").value * `${[data[0].conversion_rates.ANG]}`

    if (currencySelection === "AED") {
      document.getElementById('exchange').innerText = AED;
    } else if (currencySelection === "AFN") {
      document.getElementById('exchange').innerText = AFN;
    } else if (currencySelection === "ALL") {
      document.getElementById('exchange').innerText = ALL;
    } else if (currencySelection === "AMD") {
      document.getElementById('exchange').innerText = AMD;
    } else if (currencySelection === "ANG") {
      document.getElementById('exchange').innerText = ANG;
    }
    }
  
  function formHandler(event) {
    event.preventDefault();
    getExchange();
  }
  
  
  window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", formHandler);
  }) 


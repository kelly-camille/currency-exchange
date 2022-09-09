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
    const AED = 1 * `${[data[0].conversion_rates.AED]}`

    if (currencySelection === "AED") {
      document.getElementById('exchange').innerText = AED;
    } else if (currencySelection === "AFN") {
      document.getElementById('exchange').innerText = `${[data[0].conversion_rates.AFN]}`;
    } else if (currencySelection === "ALL") {
      document.getElementById('exchange').innerText = `${[data[0].conversion_rates.ALL]}`;
    } else if (currencySelection === "AMD") {
      document.getElementById('exchange').innerText = `${[data[0].conversion_rates.AMD]}`;
    } else if (currencySelection === "ANG") {
      document.getElementById('exchange').innerText = `${[data[0].conversion_rates.ANG]}`;
    }
    }
  
  function formHandler(event) {
    event.preventDefault();
    getExchange();
  }
  
  
  window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", formHandler);
  }) 
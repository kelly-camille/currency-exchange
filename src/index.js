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

    if (currencySelection === "AED") {
      document.getElementById('exchange').innerText = `${[data[0].conversion_rates.AED]}`;
    } else {
      document.getElementById('exchange').innerText = `${[data[0].conversion_rates.AFN]}`;
    }
    }

    // document.getElementById('exchange').innerText = `${[data[0].conversion_rates.AED]}`;
  
  function formHandler(event) {
    event.preventDefault();
    getExchange();
  }
  
  
  window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", formHandler);
  }) 
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
    document.getElementById('exchange').innerText = `${[data[0][0]]}`;
  }
  
  function formHandler(event) {
    event.preventDefault();
    getExchange();
  }
  
  
  window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", formHandler);
  }) 
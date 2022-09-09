import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from '/currency-exchange.js'

function getExchange() {
  let promise = ExchangeService.getExchange();
  primise.then(function(exchangeDataArray) {
    printElements(exchangeDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });
  }

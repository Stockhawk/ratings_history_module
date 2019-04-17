import { mockRequestStock, mockRequestPurchase } from './mockRequestDB';

function getStock(stockID) {
  return mockRequestStock(`/ratings/${stockID}`)
    .then(stock => stock.recBuy);
}

function getPurchase(stockID) {
  return mockRequestPurchase(`/purchases/${stockID}`)
    .then(purchase => purchase.name);
}

export default { getStock, getPurchase };

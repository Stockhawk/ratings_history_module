const { requestStock, requestPurchase } = require('./model');

module.exports.getStocks = stockID => requestStock(stockID);

module.exports.getPurchases = stockID => requestPurchase(stockID);

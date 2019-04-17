const Stock = require('./database-mongodb/Stock.js');
const Purchase = require('./database-mongodb/Stock2.js');


module.exports.requestStock = (stockID => Stock.findOne({ symbol: stockID }));

// module.exports.requestStock = ((stockID) => {
//   return new Promise((resolve, reject) => {
//     Stock.findOne({ symbol: stockID })
//       .then(foundStock => resolve(foundStock))
//       .catch(err => reject(err));
//   });
// });

module.exports.requestPurchase = stockID => Purchase.findOne({ where: { symbol: stockID } });

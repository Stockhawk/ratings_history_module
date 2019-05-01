const faker = require('faker');
const file = require("fs").createWriteStream("./data2.csv");

var createCompanies = function( numOfChar ) {
  var options = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var allPossibilities = [];
  
  var roundChoice = function(round, charNumber) {
    for(var i = 0; i < options.length; i++){
      round = round + options[i]; 
      if(charNumber === numOfChar){
        let stock = [
          round,
          round,
          allPossibilities.length + 100,
        ];
        allPossibilities.push(stock);
      } else {
        roundChoice(round, charNumber + 1);
      }
      round = round.slice(0, -1);
     }
   };
  roundChoice('', 1);
  return allPossibilities;
};

var symbolsNames = createCompanies(5);

function generateSamplePurchase (i) {
  const samplePurchaseDateRange = faker.date.between('2013-03-03', '2019-02-02');
  const sampleQuantity = faker.random.number(100);
  
  const samplePurchase = {
    symbol: symbolsNames[i][0],
    purchase_id: faker.random.number(12131, 80123),
    name: symbolsNames[i][1],               
    timeinforce: 'Good for day',
    submitted: samplePurchaseDateRange,
    status: 'filled',
    enteredQuantity: sampleQuantity,
    filled: faker.date.between(samplePurchaseDateRange, '2019-02-02'),
    filledQuantityShares: sampleQuantity,
    filledQuantityPrice: sampleQuantity,
    total: faker.commerce.price(),
    id: symbolsNames[i][2]
  };
  return samplePurchase;
} 


(async() => {
  console.time('time')
  for(let i = 0; i < 10000001; i++) {
    for (let x = 0; x < 3; x++) {
      const purchase = generateSamplePurchase(i);
      if (i === 0 && x === 0) {
        const header = 'symbol,purchase_id,name,timeinforce,submitted,status,enteredQuantity,filled,filledQuantityShares,filledQuantityPrice,total,id\n';
        file.write(header);
      }
      if(!file.write(`${purchase.symbol},${purchase.purchase_id},${purchase.name},${purchase.timeinforce},"${purchase.submitted}",${purchase.status},${purchase.enteredQuantity},${purchase.filled},${purchase.filledQuantityShares},${purchase.filledQuantityPrice},${purchase.total},${purchase.symbol}${x}\n`)) {
        await new Promise(resolve => file.once('drain', resolve));
      }
    }
  }
})();
console.timeEnd('time');



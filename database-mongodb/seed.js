const faker = require('faker');
const file = require("fs").createWriteStream("./data.csv");

var createCompanies = function( numOfChar ) {
  console.time('test');
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
  var test = console.timeEnd('test');
  return allPossibilities;
};

var symbolsNames = createCompanies(5);

var generateStock = function(i) {
  const descriptor = faker.company.catchPhraseDescriptor();
  const descriptor2 = faker.lorem.sentence();
  const descriptor3 = faker.company.catchPhraseDescriptor();
  const descriptor4 = faker.lorem.sentence();
  const material = faker.commerce.productMaterial();
  const adjective = faker.commerce.productAdjective();
  const bs1 = faker.company.bs();
  const bs2 = faker.company.bs();
  const bs3 = faker.company.bs();
  const bs4 = faker.company.bs();
  
  const sampleStock = {
    symbol: symbolsNames[i][0],
    recBuy: faker.random.number(20),
    recHold: faker.random.number(20),
    recSell: faker.random.number(20),
    reviewBuy: `${material} ${bs1} ${symbolsNames[i][1]} ${descriptor} ${adjective}. \\n The ${bs2} ${descriptor2}. \\n Overall, ${bs1} ${symbolsNames[i][1]} ${descriptor3} ${descriptor4}`,
    reviewSell: `${material} ${bs3} ${descriptor} ${symbolsNames[i][1]} ${adjective}. \\n For ${bs4} ${descriptor2}. \\n Hence, ${bs3} ${symbolsNames[i][1]} ${descriptor3} ${descriptor4}`,
    id: symbolsNames[i][2],
  };
  return sampleStock;
};

(async() => {
  console.time('time')
  for(let i = 0; i < 10000001; i++) {
    const stock = generateStock(i);
    if (i === 0) {
      const header = 'symbol,recBuy,recHold,recSell,reviewBuy,reviewSell,id\n';
      file.write(header);
    }
    if(!file.write(`${stock.symbol},${stock.recBuy},${stock.recHold},${stock.recSell},"${stock.reviewBuy}","${stock.reviewSell}",${stock.id}\n`)) {
      await new Promise(resolve => file.once('drain', resolve));
    }
  }
})();
console.timeEnd('time');



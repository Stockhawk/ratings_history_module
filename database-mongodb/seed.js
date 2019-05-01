// const faker = require('faker');
// const file = require("fs").createWriteStream("./data.csv");

// var createCompanies = function( numOfChar ) {
//   console.time('test');
//   var options = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//   var allPossibilities = [];
  
//   var roundChoice = function(round, charNumber) {
//     for(var i = 0; i < options.length; i++){
//       round = round + options[i]; 
//       if(charNumber === numOfChar){
//         let stock = [
//           round,
//           round,
//           allPossibilities.length + 100,
//         ];
//         allPossibilities.push(stock);
//       } else {
//         roundChoice(round, charNumber + 1);
//       }
//       round = round.slice(0, -1);
//      }
//    };
//   roundChoice('', 1);
//   var test = console.timeEnd('test');
//   return allPossibilities;
// };

// var symbolsNames = createCompanies(5);

// var generateStock = function(i) {
//   const descriptor = faker.company.catchPhraseDescriptor();
//   const descriptor2 = faker.lorem.sentence();
//   const descriptor3 = faker.company.catchPhraseDescriptor();
//   const descriptor4 = faker.lorem.sentence();
//   const material = faker.commerce.productMaterial();
//   const adjective = faker.commerce.productAdjective();
//   const bs1 = faker.company.bs();
//   const bs2 = faker.company.bs();
//   const bs3 = faker.company.bs();
//   const bs4 = faker.company.bs();
  
//   const sampleStock = {
//     symbol: symbolsNames[i][0],
//     recBuy: faker.random.number(20),
//     recHold: faker.random.number(20),
//     recSell: faker.random.number(20),
//     reviewBuy: `${material} ${bs1} ${symbolsNames[i][1]} ${descriptor} ${adjective}. \\n The ${bs2} ${descriptor2}. \\n Overall, ${bs1} ${symbolsNames[i][1]} ${descriptor3} ${descriptor4}`,
//     reviewSell: `${material} ${bs3} ${descriptor} ${symbolsNames[i][1]} ${adjective}. \\n For ${bs4} ${descriptor2}. \\n Hence, ${bs3} ${symbolsNames[i][1]} ${descriptor3} ${descriptor4}`,
//     id: symbolsNames[i][2],
//   };
//   return sampleStock;
// };

// (async() => {
//   console.time('time')
//   for(let i = 0; i < 10000001; i++) {
//     const stock = generateStock(i);
//     if (i === 0) {
//       const header = 'symbol,recBuy,recHold,recSell,reviewBuy,reviewSell,id\n';
//       file.write(header);
//     }
//     if(!file.write(`${stock.symbol},${stock.recBuy},${stock.recHold},${stock.recSell},"${stock.reviewBuy}","${stock.reviewSell}",${stock.id}\n`)) {
//       await new Promise(resolve => file.once('drain', resolve));
//     }
//   }
// })();
// console.timeEnd('time');


const faker = require('faker');
const db = require('./index.js');
const Stock = require('./Stock.js');

const symbolsNames = [
  ['MSFT', 'Microsoft Corporation'],
  ['AAPL', 'Apple Inc.'],
  ['FB', 'Facebook, Inc.'],
  ['BABA', 'Alibaba Group Holding Limited'],
  ['XOM', 'Exxon Mobil Corporation'],
  ['V', 'Visa Inc.'],
  ['JPM', 'JPMorgan Chase & Co.'],
  ['BAC', 'Bank of America Corporation'],
  ['VZ', 'Verizon Communications Inc.'],
  ['INTC', 'Intel Corporation'],
  ['WFC', 'Wells Fargo & Company'],
  ['PFE', 'Pfizer Inc.'],
  ['CSCO', 'Cisco Systems, Inc.'],
  ['T', 'AT&T Inc.'],
  ['MRK', 'Merck & Co., Inc.'],
  ['BA', 'The Boeing Company'],
  ['TSM', 'Taiwan Semiconductor Manufacturing Company Limited'],
  ['KO', 'The Coca-Cola Company'],
  ['DIS', 'The Walt Disney Company'],
  ['ORCL', 'Oracle Corporation'],
  ['CMCSA', 'Comcast Corporation'],
  ['NFLX', 'Netflix, Inc.'],
  ['C', 'Citigroup Inc.'],
  ['NKE', 'NIKE, Inc.'],
  ['LLY', 'Eli Lilly and Company'],
  ['CRM', 'salesforce.com, inc.'],
  ['DWDP', 'DowDuPont Inc.'],
  ['NVDA', 'NVIDIA Corporation'],
  ['MO', 'Altria Group, Inc.'],
  ['PBR-A', 'Petróleo Brasileiro S.A. - Petrobras'],
  ['PBR', 'Petróleo Brasileiro S.A. - Petrobras'],
  ['SBUX', 'Starbucks Corporation'],
  ['GE', 'General Electric Company'],
  ['GILD', 'Gilead Sciences, Inc.'],
  ['BMY', 'Bristol-Myers Squibb Company'],
  ['COP', 'ConocoPhillips'],
  ['USB', 'U.S. Bancorp'],
  ['SAN', 'Banco Santander, S.A.'],
  ['MS', 'Morgan Stanley'],
  ['MDLZ', 'Mondelez International, Inc.'],
  ['CVS', 'CVS Health Corporation'],
  ['ABEV', 'Ambev S.A.'],
  ['QCOM', 'QUALCOMM Incorporated'],
  ['FOXA', 'Fox Corporation'],
  ['VALE', 'Vale S.A.'],
  ['BBD', 'Banco Bradesco S.A.'],
  ['RIO', 'Rio Tinto Group'],
  ['SLB', 'Schlumberger Limited'],
  ['WBA', 'Walgreens Boots Alliance, Inc.'],
  ['LYG', 'Lloyds Banking Group plc'],
  ['SCHW', 'The Charles Schwab Corporation'],
  ['BSX', 'Boston Scientific Corporation'],
  ['GM', 'General Motors Company'],
  ['ITUB', 'Itaú Unibanco Holding S.A.'],
  ['OXY', 'Occidental Petroleum Corporation'],
  ['TSLA', 'Tesla, Inc.'],
  ['BIIB', 'Biogen Inc.'],
  ['KMI', 'Kinder Morgan, Inc.'],
  ['UBS', 'UBS Group AG'],
  ['MU', 'Micron Technology, Inc.'],
  ['JD', 'JD.com, Inc.'],
  ['KHC', 'The Kraft Heinz Company'],
  ['ET', 'Energy Transfer LP'],
  ['BBVA', 'Banco Bilbao Vizcaya Argentaria, S.A.'],
  ['AMAT', 'Applied Materials, Inc.'],
  ['IBN', 'ICICI Bank Limited'],
  ['CCL', 'Carnival Corporation'],
  ['ATVI', 'Activision Blizzard, Inc.'],
  ['F', 'Ford Motor Company'],
  ['WMB', 'The Williams Companies, Inc.'],
  ['BBT', 'BB&T Corporation'],
  ['EBAY', 'eBay Inc.'],
  ['DAL', 'Delta Air Lines, Inc.'],
  ['NOK', 'Nokia Corporation'],
  ['SQ', 'Square, Inc.'],
  ['MNST', 'Monster Beverage Corporation'],
  ['HPQ', 'HP Inc.'],
  ['AMD', 'Advanced Micro Devices, Inc.'],
  ['SIRI', 'Sirius XM Holdings Inc.'],
  ['S', 'Sprint Corporation'],
  ['GOLD', 'Barrick Gold Corporation'],
  ['TWTR', 'Twitter, Inc.'],
  ['HAL', 'Halliburton Company'],
  ['FDC', 'First Data Corporation'],
  ['CNC', 'Centene Corporation'],
  ['APC', 'Anadarko Petroleum Corporation'],
  ['HPE', 'Hewlett Packard Enterprise Company'],
  ['NEM', 'Newmont Mining Corporation'],
  ['FCX', 'Freeport-McMoRan Inc.'],
  ['CBS', 'CBS Corporation'],
  ['TEVA', 'Teva Pharmaceutical Industries Limited'],
  ['DB', 'Deutsche Bank Aktiengesellschaft'],
  ['IQ', 'iQIYI, Inc.'],
  ['FITB', 'Fifth Third Bancorp'],
  ['LEN', 'Lennar Corporation'],
  ['KEY', 'KeyCorp'],
  ['DHI', 'D.R. Horton, Inc.'],
  ['FNMA', 'Federal National Mortgage Association'],
  ['CFG', 'Citizens Financial Group, Inc.'],
  ['MYL', 'Mylan N.V.'],
];

for (let i = 0; i < 100; i += 1) {
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

  const sampleStocks = [{
    symbol: symbolsNames[i][0],
    recbuy: faker.random.number(20),
    rechold: faker.random.number(20),
    recsell: faker.random.number(20),
    reviewbuy: `${material} ${bs1} ${symbolsNames[i][1]} ${descriptor} ${adjective}. \n The ${bs2} ${descriptor2}. \n Overall, ${bs1} ${symbolsNames[i][1]} ${descriptor3} ${descriptor4}`,
    reviewsell: `${material} ${bs3} ${descriptor} ${symbolsNames[i][1]} ${adjective}. \n For ${bs4} ${descriptor2}. \n Hence, ${bs3} ${symbolsNames[i][1]} ${descriptor3} ${descriptor4}`,
  }];

  const insertSampleStocks = () => {
    Stock.create(sampleStocks)
      .then(() => db.close())
      .catch(err => console.log(`Error saving data to database: ${err}`));
  };

  insertSampleStocks();
}

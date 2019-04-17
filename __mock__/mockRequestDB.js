const Stock = {
  symbol: 'TSTSTOCK',
  name: 'Test',
  recBuy: 4,
  recHold: 2,
  recSell: 22,
  reviewBuy: `BUY After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement: \n
  “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.” \n
  After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. We will update the article with new information as the yarn unravels. `,
  reviewSell: `SELL After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement: \n  
  “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.” \n
  After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. We will update the article with new information as the yarn unravels. `,
};

const Purchase = {
  symbol: 'TSTSTOCK',
  name: 'Test',
  status: 'filled',
};

const mockResponse = url => new Promise((resolve, reject) => {
  const stockID = url.substr('/ratings/'.length);
  process.nextTick(() => {
    // eslint-disable-next-line no-unused-expressions
    (Stock.symbol === stockID) ? resolve(Stock) : reject(Error);
  });
});

const mockPurchase = url => new Promise((resolve, reject) => {
  const stockID = url.substr('/history/'.length);
  process.nextTick(() => {
    // eslint-disable-next-line no-unused-expressions
    (Purchase.symbol === stockID) ? resolve(Purchase) : reject(Error);
  });
});

const reqs = { mockResponse, mockPurchase };

export default reqs;

const express = require('express');
const path = require('path');
const pool = require('./postgresql/index.js');
const bodyParser = require('body-parser');
const redis = require('redis');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'client/dist')));
app.use('/stocks/:stockid', express.static(path.join(__dirname, 'client/dist')));


app.get('/api/ratings/:stockID', (req, res) => {
  var stock = req.params.stockID.toUpperCase();
  var stockRating = `SELECT * FROM analyst_ratings WHERE symbol = '${stock}'`;
  pool.query(stockRating, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.get('/api/history/:stockID', (req, res) => {
  var stock = req.params.stockID.toUpperCase();
  var stockRating = `SELECT * FROM buying_history WHERE symbol = '${stock}'`;
  pool.query(stockRating, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});


app.delete('/api/ratings/:stockID', (req, res) => {
  var stock = req.params.stockID.toUpperCase();
  console.log(req.params)
  var stockRating = `DELETE FROM analyst_ratings WHERE symbol = '${stock}'`;
  pool.query(stockRating, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.delete('/api/history/:stockID', (req, res) => {
  var stock = req.params.stockID.toUpperCase();
  var stockRating = `DELETE FROM buying_history WHERE symbol = '${stock}'`;
  pool.query(stockRating, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.post('/api/ratings/:stockID', (req, res) => {
  const { symbol,
         recBuy,
         recHold,
         recSell,
         reviewBuy,
         reviewSell,
         id } = req.body
  var stockRating = `
    INSERT INTO analyst_ratings(
      symbol,
      recBuy,
      recHold,
      recSell,
      reviewBuy,
      reviewSell,
      id)
VALUES (${symbol},
        ${recBuy},
        ${recHold},
        ${recSell},
        ${reviewBuy},
        ${reviewSell},
        ${id}))`;
  pool.query(stockRating, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.post('/api/history/:stockID', (req, res) => {
  const { symbol, 
          purchase_id,
          name,
          timeinforce,
          submitted,
          status,
          enteredQuantity,
          filled,
          filledQuantityShares,
          filledQuantityPrice ,
          total,
          id } = req.body;

  var stockRating = `
    INSERT INTO buying_history(
      symbol,
      purchase_id,
      name,
      timeinforce,
      submitted,
      status,
      enteredQuantity,
      filled,
      filledQuantityShares,
      filledQuantityPrice ,
      total,
      id
    )
    VALUES('${symbol}', 
           '${purchase_id}', 
           '${name}', 
           '${timeinforce}', 
           '${submitted}', 
           '${status}', 
           '${enteredQuantity}', 
           '${filled}', 
           '${filledQuantityShares}', 
           '${filledQuantityPrice}', 
           '${total}', 
           '${id}')
  `;
  pool.query(stockRating, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.patch('/api/ratings/:stockID', (req, res) => {
  const { symbol,
    recBuy,
    recHold,
    recSell,
    reviewBuy,
    reviewSell,
    id } = req.body
  var stockRating = `
    UPDATE analyst_ratings SET 
      recBuy = ${recBuy}, 
      recHold = ${recHold}, 
      recSell = ${recSell},
      reviewBuy = ${reviewBuy},
      reviewSell = ${reviewSell} 
    WHERE ID = ${id};`;
  pool.query(stockRating, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.patch('/api/history/:stockID', (req, res) => {
  const { symbol, 
    purchase_id,
    name,
    timeinforce,
    submitted,
    status,
    enteredQuantity,
    filled,
    filledQuantityShares,
    filledQuantityPrice ,
    total,
    id } = req.body;
  var stockRating = `
  UPDATE buying_history SET 
    symbol = ${symbol}, 
    purchase_id = ${purchase_id}, 
    name = ${name}, 
    timeinforce = ${timeinforce},
    submitted = ${submitted},
    status = ${status},
    enteredQuantity = ${enteredQuantity},
    filled = ${filled},
    filledQuantityShares = ${filledQuantityShares},
    filledQuantityPrice = ${filledQuantityPrice},
    total = ${total}, 
    id = ${id}
  WHERE ${id} = 3;`;
  pool.query(stockRating, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});


const server = app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };


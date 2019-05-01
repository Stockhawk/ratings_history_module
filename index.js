const newrelic = require('newrelic');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pool = require('./postgresql/index.js');
const redis = require('redis');
const app = express();
const PORT = 3001;
const client = redis.createClient();

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

// const getBuyingHistory = (req, res, isbn) => {
//   var stock = req.params.stockID.toUpperCase();
//   var stockRating = `SELECT * FROM buying_history WHERE symbol = '${stock}'`;
//   pool.query(stockRating)
//   .then((results) => {
//     client.setex(isbn, 3600, JSON.stringify(results.rows));
//     res.status(200).json(results.rows);
//   })
//   .catch(err => console.log(err));
// };


// const getCache2 = (req, res) => {
//   let isbn = req.params.stockID.toUpperCase();
//   //Check the cache data from the server redis
//   client.get(isbn, (err, result) => {
//     if (result) {
//       console.log('redis2 is working!')
//       res.send(result);
//     } else {
//       getBuyingHistory(req, res, isbn);
//     }
//   });
// }

// app.get('/api/history/:stockID', getCache2);







// const getRatings = (req, res, id) => {
//   var stock = req.params.stockID.toUpperCase();
//   var stockRating = `SELECT * FROM analyst_ratings WHERE symbol = '${stock}'`;
//   pool.query(stockRating)
//   .then((results) => {
//     client.setex(id, 3600, JSON.stringify(results.rows));
//     res.status(200).json(results.rows);
//   })
//   .catch(err => console.log(err));
// };

// const getCache = (req, res) => {
//   let id = req.params.stockID.toUpperCase();
//   //Check the cache data from the server redis
//   client.get(id, (err, result) => {
//     if (result) {
//       console.log('redis is working!')
//       res.send(result);
//     } else {
//       getRatings(req, res, id);
//     }
//   });
// }

// app.get('/api/ratings/:stockID', getCache);


const server = app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };


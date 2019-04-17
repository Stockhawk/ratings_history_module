# ratings_history_module
## Description
The Analyst Ratings module displays data and expert recommendations in an accessible and user-friendly UI. The Purchase History module renders a dynamic and individually expanding list of past purchases.    As a potential customer, I want to be able to easily and confidently determine whether I should buy, hold, or sell.   As an existing customer, I want to see my history of past purchases so that I can see that I am making good purchasing decisions and/or improve future decisions. 


## Note
Note: for a proxy server, the compressed webpack bundles (bundle.js.gz and bundle.js.br) can be uploaded to S3 rather than living in the client/dist/.

## Scripts
```
npm run react-dev (webpack --watch -d)
npm start (node index.js not nodemon index.js)
```

##CRUD API
| Endpoint                        | Type      | Operation                 |
|---------------------------------|-----------|---------------------------|
| `/api/stocks/:stockID/ratings`  | GET       | Get rating                |
| `/api/stocks/ratings/`          | POST      | Add rating                |
| `/api/stocks/:stockID/ratings`  | PATCH     | Update rating             |
| `/api/stocks/:stockID/ratings`  | DELETE    | Delete rating             |
| `/api/stocks/:stockID/history`  | GET       | Get history               |
| `/api/stocks/history/`          | POST      | Add history               |
| `/api/stocks/:stockID/history`  | PATCH     | Update history            |
| `/api/stocks/:stockID/history`  | DELETE    | Delete history            |
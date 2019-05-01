


CREATE TABLE analyst_ratings(
  symbol text,
  recBuy integer,
  recHold integer,
  recSell integer, 
  reviewBuy text,
  reviewSell text,
  id integer,
  PRIMARY KEY (id)
);

COPY analyst_ratings FROM '/Users/stellaliang/Desktop/ratings_history_module/database-mongodb/data.csv' DELIMITER ',' CSV HEADER;

COPY analyst_ratings FROM '/home/ec2-user/data.csv' DELIMITER ',' CSV HEADER;




-- SELECT table1.column1,table1.column2,table2.column1,....
-- FROM table1 
-- INNER JOIN table2
-- ON table1.matching_column = table2.matching_column;


-- SELECT analyst_ratings.recBuy,analyst_ratings.recHold,analyst_ratings.recSell,analyst_ratings.reviewBuy,analyst_ratings.reviewSell
-- FROM analyst_ratings
-- INNER JOIN buying_history
-- ON analyst_ratings.symbol = buying_history.symbol
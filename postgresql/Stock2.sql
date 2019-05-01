CREATE TABLE buying_history(
    symbol text,
    purchase_id integer,
    name text,
    timeinforce text,
    submitted text,
    status text,
    enteredQuantity integer,
    filled text,
    filledQuantityShares integer,
    filledQuantityPrice integer,
    total text,
    id text
);

COPY buying_history FROM '/Users/stellaliang/Desktop/ratings_history_module/database-mongodb/data2.csv' DELIMITER ',' CSV HEADER;
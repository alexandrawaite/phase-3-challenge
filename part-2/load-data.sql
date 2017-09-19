-- SQL script to insert [grocery seed data][grocery-data] and load from CSV is created in a file `load-data.sql`
-- SQL statements to insert data into the `orders` and `shoppers` table is added to the file `load-data.sql`. (Add at least 5 rows in each table)

COPY grocery_items (name, price, section)
FROM '/Users/alexandrawaite/Projects/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (name)
VALUES ('Tina'), ('Shanti'), ('Mary'), ('Paula'), ('Rebecca');

INSERT INTO orders (shopper_id)
VALUES (1), (3), (4), (3), (1);

INSERT INTO items_orders (item_id, order_id)
VALUES (1, 1), (5, 2), (20, 3), (25, 4), (4, 5), (10, 1), (30, 4), (23, 5), (16, 5), (13, 2);
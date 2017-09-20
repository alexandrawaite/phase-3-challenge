const pgp = require('pg-promise')();

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'grocery_store'
}

const db = pgp(cn);

const queries = {

  listProductSection: (section) => {
    return db.any(`
      SELECT name AS product_name, section
      FROM grocery_items
      WHERE section = $1
      `, [section]);
  },

  listShopperOrders: (shopper) => {
    return db.any(`
      SELECT orders.id as order_id, SUM(CAST(grocery_items.price AS REAL)) AS total_cost
      FROM orders
        INNER JOIN items_orders
          ON items_orders.order_id = orders.id
        INNER JOIN grocery_items
          ON grocery_items.id = items_orders.item_id
      WHERE shopper_id = $1
      GROUP BY orders.id
    `, [shopper]);
  },

  listShoppers: () => {
    return db.any(`
      SELECT shoppers.name AS shopper_name, CAST(COUNT(orders.id) AS INTEGER) AS total_orders
      FROM shoppers
        INNER JOIN orders
          ON shoppers.id = orders.shopper_id
      WHERE orders.id >= 1
      GROUP BY shoppers.id
    `);
  }
}

module.exports = queries;
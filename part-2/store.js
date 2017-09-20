#!/usr/local/bin/node

const queries = require('./database');
const print = require('node-print');

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
  case 'product-list':
    queries.listProductSection(argument)
      .then((results) => {
        print.pt(results);
        process.exit();
      });
    break;
  case 'shopper-orders':
    queries.listShopperOrders(argument)
      .then((results) => {
        print.pt(results);
        process.exit();
      });
    break;
  case 'real-shoppers':
    queries.listShoppers()
      .then((results) => {
        print.pt(results);
        process.exit();
      });
    break;
  default:
    console.log('Please enter a valid command');
}
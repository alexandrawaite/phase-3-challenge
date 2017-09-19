// tests for queries are written in a file database_test.js
// Tests can be run with the command $ npm test

const expect = require('chai').expect;
const queries = require('../database');

describe('Query functions', () => {
  describe('listProductSection()', () => {
    it('listProductSection returns an array', () => {
      return queries.listProductSection('dairy').then((result) => {
        expect(result).to.be.an('array');
      })
    });
  });
  describe('listShopperOrder()', () => {
    it('listShopperOrder returns an array', () => {
      return queries.listShopperOrder(1).then((result) => {
        expect(result).to.be.an('array');
      })
    });
  });
  describe('listShoppers()', () => {
    it('listShoppers returns an array', () => {
      return queries.listShoppers().then((result) => {
        expect(result).to.be.an('array');
      })
    });
  });
});
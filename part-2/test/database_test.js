const expect = require('chai').expect;
const queries = require('../database');

describe('Query functions', () => {
  describe('listProductSection()', () => {
    it('listProductSection returns an array', () => {
      return queries.listProductSection('dairy').then((result) => {
        expect(result).to.be.an('array');
      })
    });
    it('listProductSection returns butter as dairy\'s first product', () => {
      return queries.listProductSection('dairy').then((result) => {
        expect(result[0].product_name).to.equal('Butter');
      })
    })
    it('listProductSection returns an empty array when an invalid parameter is passed', () => {
      return queries.listProductSection('frzn').then((result) => {
        expect(result).to.deep.equal([]);
      })
    })
  });
  describe('listShopperOrders()', () => {
    it('listShopperOrders returns an array', () => {
      return queries.listShopperOrders(1).then((result) => {
        expect(result).to.be.an('array');
      })
    });
    it('listShopperOrders returns 1 order for shopper_id 4', () => {
      return queries.listShopperOrders(4).then((result) => {
        expect(result.length).to.equal(1);
      })
    });
    it('listShopperOrders', () => {
      return queries.listShopperOrders(1).then((result) => {
        expect(result[1].total_cost).to.equal(33.49);
      })
    });
  });
  describe('listShoppers()', () => {
    it('listShoppers returns an array', () => {
      return queries.listShoppers().then((result) => {
        expect(result).to.be.an('array');
      })
    });
    it('listShoppers array contains three shoppers', () => {
      return queries.listShoppers().then((result) => {
        expect(result.length).to.equal(3);
      })
    });
  });
});
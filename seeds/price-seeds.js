const { Price } = require('../models');

const pricedata = [
  {
    price_id: 1,
    product_id: 1
  },
  {
    price_id: 2,
    product_id: 2
  },
  {
    price_id: 3,
    product_id: 3
  },
  {
    price_id: 4,
    product_id: 4
  },
  {
    price_id: 5,
    product_id: 5
  },
  {
    price_id: 6,
    product_id: 6
  },
  {
    price_id: 7,
    product_id: 7
  },
  {
    price_id: 8,
    product_id: 8
  },
  {
    price_id: 9,
    product_id: 9
  },
  {
    price_id: 10,
    product_id: 10
  },
  {
    price_id:11,
    product_id: 11
  },
  
];

const seedPrice = () => Price.bulkCreate(pricedata);

module.exports = seedPrice;

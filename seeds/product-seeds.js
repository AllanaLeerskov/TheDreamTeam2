const { Product } = require('../models');

const productdata = [
  {
    product_id: 1,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 1,
    id: 5,
    photo: ''
  },
  {
    product_id: 2,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 2,
    id: 10,
    photo: ''
  },
  {
    product_id: 3,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 3,
    id: 15,
    photo: ''
  },
  {
    product_id: 4,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 4,
    id: 25,
    photo: ''
  },
  {
    product_id: 5,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 5,
    id: 35,
    photo: ''
  },
  {
    product_id: 6,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 6,
    id: 45,
    photo: ''
  },
  {
    product_id: 7,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 7,
    id: 55,
    photo: ''
  },
  {
    product_id: 8,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 8,
    id: 65,
    photo: ''
  },
  {
    product_id: 9,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 9,
   id: 20,
    photo: ''
  },
  {
    product_id: 10,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 10,
    id: 30,
    photo: ''
  },
  {
    product_id: 11,
    title: 'Old Shoes',
    description: 'Old Nike Air Force Shoes. Well used.',
    user_id: 11,
    id: 40,
    photo: ''
  },
] ;

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;
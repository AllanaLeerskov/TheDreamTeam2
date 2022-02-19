const seedUsers = require('./user-seeds');
const seedPrice = require('./price-seeds');
const seedProduct = require('./product-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPrice();
  console.log('--------------');

  await seedProduct();
  console.log('--------------');

  process.exit(0);
};

seedAll();

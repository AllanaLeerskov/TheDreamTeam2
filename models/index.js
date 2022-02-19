// import all models
const Price = require('./Price');
const User = require('./User');
const Product = require('./Product');


// create associations
User.hasMany(Product, {
});

Product.belongsTo(User, {
});


Price.hasMany(Product, {
});

Product.belongsTo(Price, {
  
});



module.exports = { User, Price, Product };
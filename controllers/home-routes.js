const router = require('express').Router();
const sequelize = require('../config/connection');
const { Price, User, Product } = require('../models');

// get all posts for homepage

  router.get('/', (req, res) => {
   res.render('homepage')
  })
    
  
// router.post('/', User.create);
// router.get('/', User.findOne);
// router.put('/', User.update);
// router.delete('/:username', User.delete);

// router.post('/', Product.create);
// router.get('/', Product.findAll);
//router.get('/published', Product.findAllPublished);
// router.get('/:product_id', Product.findOne);
// router.put('/:product_id', Product.update);
//router.delete('/:poduct_id', Product.delete);
//router.delete('/', Product.deleteAll);

// router.post('/', Price.create);
// router.get('/', Price.findAll);
//router.get('/published', Price.findAllPublished);
// router.get('/:price_id', Price.findOne);
// router.put('/:price_id', Price.update);
//router.delete('/:price_id', Price.delete);
//router.delete('/', Price.deleteAll);

router.get('/cart', (req, res) => {
  res.render('cart');
});

router.get('/login', (req, res) => {
  res.render('login');
});

//in cart need add route, update route, delete route


module.exports = router;
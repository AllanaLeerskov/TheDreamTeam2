const router = require('express').Router();
const sequelize = require('../config/connection');
const { Price, User, Product } = require('../models');

// get all posts for homepage

  router.get('/', (req, res) => {
   res.render('homepage')
  })
    
router.get('/cart', (req, res) => {
  res.render('cart');
});

router.get('/login', (req, res) => {
  res.render('login');
});

//in cart need add route, update route, delete route


module.exports = router;
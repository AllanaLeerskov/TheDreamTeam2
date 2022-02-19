const router = require('express').Router();
const db = require('.//..//../models/index');


const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes');
const priceRoutes = require('./price-routes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/price', priceRoutes);

module.exports = router;

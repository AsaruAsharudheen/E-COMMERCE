const express = require('express');

const router = express.Router();
const imageRoute = require('./image-route');
const productRoutes = require('./product-routes');
const adminRoutes = require('./admin-routes');
const userRoutes = require('./user-routes');
const orderRoutes = require('./order-routes');
const cartRoutes = require('./cart-routes');

router.use('/upload', imageRoute);

router.use('/admin', adminRoutes);

router.use('/user', userRoutes);

router.use('/product', productRoutes);

router.use('/order', orderRoutes);
router.use('/cart', cartRoutes);

module.exports = router;

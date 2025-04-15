const express = require('express');
const { checkToken } = require('../middlewares'); // Assuming checkToken middleware is used for authentication
const {
  getCart,
  updateCart,
  removeItemFromCart,
} = require('../controllers/cart-controllers');

const router = express.Router();

// Route to get the cart for a specific user
router.get('/:userId', checkToken(['USER', 'ADMIN']), getCart);

// Route to update the cart (add or update product quantity)
router.patch('/:userId', checkToken(['USER', 'ADMIN']), updateCart);

// Route to remove an item from the cart
router.delete(
  '/:userId/:productId',
//   checkToken(['USER', 'ADMIN']),
  removeItemFromCart
);

module.exports = router;

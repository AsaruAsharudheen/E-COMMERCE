const express = require('express');
const { checkToken } = require('../middlewares');
const {
  getOrder,
  getOrderById,
  postOrder,
  deleteOrder,
  updateOrder,
  
} = require('../controllers/order-controllers');

const router = express.Router();

// router.get('/', checkToken(['ADMIN', 'USER',]), getDepartment);
router.get('/', getOrder);
router.post('/', postOrder);
router.get('/:id', getOrderById);
router.delete('/:id', deleteOrder);
router.patch('/:id', updateOrder);

module.exports = router;

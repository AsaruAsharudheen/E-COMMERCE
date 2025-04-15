const express = require('express');
const { checkToken } = require('../middlewares');
const {
  getProduct,
  getProductById,
  postProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/product-controllers');

const router = express.Router();

// router.get('/', checkToken(['ADMIN', 'USER',]), getDepartment);
router.get('/', getProduct);
router.post('/', postProduct);
router.get('/:id', getProductById);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);

module.exports = router;

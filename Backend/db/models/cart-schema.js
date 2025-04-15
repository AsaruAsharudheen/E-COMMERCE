const mongoose = require('mongoose');

// Cart Item Schema
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',  // Reference to the Product collection
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  },
  ProductName: {
    type: String,
    required: true,
  },
  ProductPrice: {
    type: Number,
    required: true,
  },
  ProductSize: {
    type: String,
    required: true,
  },
  ProductImage: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,  // Tracks createdAt and updatedAt
});

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User collection
    required: true,
  },
  items: [cartItemSchema],  // Array of cart items
  totalPrice: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,  // Tracks createdAt and updatedAt
});

// Cart Model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

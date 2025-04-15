const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productSize: { type: String, required: true },
    productImage: { type: String, required: true },
    customerName: { type: String, required: true },
    customerAddress: { type: String, required: true },
    customerCity: { type: String, required: true },
    customerPostalCode: { type: String, required: true },
    customerCountry: { type: String, required: true },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'], // Validation for a 10-digit phone number
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['creditCard', 'debitCard', 'paypal', 'cashOnDelivery'], // Enum of accepted payment methods
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

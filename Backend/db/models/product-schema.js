const { Schema, model } = require('mongoose');

const productSchema = Schema(
  {
    Productname: {
      type: String,
      required: true,
      trim: true,
    },
    ProductCategory: {
      type: String,
      required: true,
      trim: true,
    },
    ProductPrice: {
      type: String,
      required: true,
      trim: true,
    },
    ProductSize: [String],

    about: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: 'http://localhost:8000/images/no-image.jpg',
    },
  },
  { timestamps: true }
);

const Product = model('products', productSchema);

module.exports = Product;

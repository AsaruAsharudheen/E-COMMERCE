const Product = require('../db/models/product-schema');

module.exports.getProduct = async (req, res) => {
  try {
    const dbResponse = await Product.find();
    res.status(200).json(dbResponse);
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.postProduct = async (req, res) => {
  try {
    const { body } = req;
    const dbResponse = await Product.create(body);
    res
      .status(200)
      .json({ message: 'Product added successfully', error: false });
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Product deleted successfully',
      error: false,
      success: true,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await Product.findByIdAndUpdate(id, body);
    return res.status(200).json({
      message: 'product updated successfully',
      error: false,
      success: true,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

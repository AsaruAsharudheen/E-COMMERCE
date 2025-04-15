const Order = require('../db/models/order-schema');

module.exports.getOrder = async (req, res) => {
  try {
    const dbResponse = await Order.find();
    res.status(200).json(dbResponse);
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.postOrder = async (req, res) => {
  try {
    const { body } = req;
    const dbResponse = await Order.create(body);
    res.status(200).json({ message: 'order added successfully', error: false });
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);
    return res.status(200).json(order);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'order deleted successfully',
      error: false,
      success: true,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};




module.exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const order = await Order.findByIdAndUpdate(id, body);
    return res.status(200).json({
      message: 'order updated successfully',
      error: false,
      success: true,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

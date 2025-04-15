const Cart = require('../db/models/cart-schema'); // Import Cart model

// Get Cart for a User
module.exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found', error: true });
    }

    res.status(200).json(cart);
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

// Create or Update Cart for a User
module.exports.updateCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    // Find the cart of the user
    let cart = await Cart.findOne({ userId });

    // If cart doesn't exist, create a new one
    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
        totalPrice: 0, // Will need to calculate the total later
      });
    } else {
      // Check if the product already exists in the cart
      const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

      if (existingItemIndex !== -1) {
        // If product already in cart, update the quantity
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        // If product doesn't exist, add a new item to the cart
        cart.items.push({ productId, quantity });
      }
    }

    // Update total price
    await updateTotalPrice(cart);

    // Save the cart
    await cart.save();

    res.status(200).json({ message: 'Cart updated successfully', cart, error: false });
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

// Remove Item from Cart
module.exports.removeItemFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    // Find the cart
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found', error: true });
    }

    // Filter out the product to be deleted
    const updatedItems = cart.items.filter(item => item.productId.toString() !== productId);
    cart.items = updatedItems;

    // Update total price
    await updateTotalPrice(cart);

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: 'Item removed from cart', cart, error: false });
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

// Calculate and Update the Total Price of the Cart
const updateTotalPrice = async (cart) => {
  let totalPrice = 0;

  for (let item of cart.items) {
    // Assuming the product price is available in the Product collection
    const product = await Product.findById(item.productId); // Fetch product details
    totalPrice += product.ProductPrice * item.quantity; // Calculate price for this item
  }

  cart.totalPrice = totalPrice;
};


import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { CartContext } from '../context/CartContext';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // In a real app, you would process payment here.
    // We will simulate success and navigate to a confirmation page.
    const orderDetails = {
      customer: formData,
      items: cartItems,
      total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    };

    clearCart();
    navigate('/confirmation', { state: { order: orderDetails } });
  };

  return (
    <motion.div
      className="checkout-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="page-title">Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <h2>Shipping Information</h2>
        <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} required />
        <input type="text" name="address" placeholder="Street Address" onChange={handleInputChange} required />
        <input type="text" name="city" placeholder="City" onChange={handleInputChange} required />
        <input type="text" name="zip" placeholder="ZIP / Postal Code" onChange={handleInputChange} required />
        <Button>Place Order</Button>
      </form>
    </motion.div>
  );
};

export default CheckoutPage;

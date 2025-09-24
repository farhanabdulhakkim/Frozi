import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import './ConfirmationPage.scss';

const ConfirmationPage = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="confirmation-page">
        <h1>Something went wrong.</h1>
        <p>No order details found.</p>
        <Link to="/"><Button>Go to Homepage</Button></Link>
      </div>
    );
  }

  return (
    <motion.div
      className="confirmation-page"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="confirmation-icon">✓</div>
      <h1>Thank You, {order.customer.name}!</h1>
      <p>Your order has been placed successfully.</p>
      
      <div className="order-summary-details">
        <h2>Order Summary</h2>
        {order.items.map(item => (
          <div key={item.id} className="summary-item">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="summary-final-total">
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
      </div>

      <Link to="/"><Button>Back to Shopping</Button></Link>
    </motion.div>
  );
};

export default ConfirmationPage;

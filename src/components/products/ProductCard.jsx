import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductCard.scss';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProductCard = ({ product }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="motion-wrapper" // Use a wrapper div for animation
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`} className="product-card">
        <div className="product-image-container">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

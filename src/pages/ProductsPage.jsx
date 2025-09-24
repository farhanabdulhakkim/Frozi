import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';
import Spinner from '../components/common/Spinner';
import './ProductsPage.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function fetches data from your new API server
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // The empty array ensures this runs only once when the component mounts

  if (loading) {
    return <Spinner />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="products-page"
    >
      <h1 className="page-title">Our Accessories</h1>
      <motion.div
        className="product-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProductsPage;

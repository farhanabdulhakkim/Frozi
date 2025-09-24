import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';
import './ProductDetailPage.scss';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product.name} added to cart!`);
    }
  };

  if (loading) return <Spinner />;
  if (!product) return <div>Product not found.</div>;

  return (
    <motion.div
      className="product-detail-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-detail-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;

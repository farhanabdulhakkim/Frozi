import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; // Import new page
import ConfirmationPage from './pages/ConfirmationPage'; // Import new page

function App() {
  const location = useLocation();

  return (
    <>
      <Toaster position="top-center" toastOptions={{ /* ... */ }} />
      <Header />
      <main style={{ padding: '2rem 1rem', minHeight: '80vh' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} /> {/* Add checkout route */}
            <Route path="/confirmation" element={<ConfirmationPage />} /> {/* Add confirmation route */}
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Timeless Elegance, Modern Design</h1>
        <p>Discover our curated collection of premium accessories.</p>
        <Link to="/products">
          <Button>Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

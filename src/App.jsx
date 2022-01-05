import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { HomePage, ProductCategory, ProductDetail } from './pages';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<ProductCategory />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

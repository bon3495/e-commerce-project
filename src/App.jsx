import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import {
  Cart,
  HomePage,
  LoginPage,
  ProductCategory,
  ProductDetail,
  RegisterPage,
} from './pages';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryId" element={<ProductCategory />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import {
  ProtectedRouteCart,
  ProtectedRouteLogin,
} from './components/ProtectedRoute/ProtectedRoute';

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
        <Route
          path="/login"
          element={
            <ProtectedRouteLogin>
              <LoginPage />
            </ProtectedRouteLogin>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRouteLogin>
              <RegisterPage />
            </ProtectedRouteLogin>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRouteCart>
              <Cart />
            </ProtectedRouteCart>
          }
        />
        <Route path="/category/:categoryId" element={<ProductCategory />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

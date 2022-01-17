import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import {
  ProtectedRouteCart,
  ProtectedRouteLogin,
} from './components/ProtectedRoute/ProtectedRoute';
import {
  CartPage,
  HomePage,
  LoginPage,
  CategoryPage,
  ProductPage,
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
              <CartPage />
            </ProtectedRouteCart>
          }
        />

        <Route path="category/:categoryId" element={<CategoryPage />} />
        <Route
          path="category/:categoryId/:productId"
          element={<ProductPage />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

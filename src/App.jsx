import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header, WrapperScroll } from './components';
import {
  ProtectedRouteCart,
  ProtectedRouteLogin,
} from './components/ProtectedRoute/ProtectedRoute';
import {
  CartPage,
  CategoryPage,
  HomePage,
  LoginPage,
  ProductPage,
  RegisterPage,
} from './pages';

const App = () => {
  return (
    <WrapperScroll>
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

        <Route path="/:categoryId" element={<CategoryPage />} />
        <Route path="/:categoryId/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </WrapperScroll>
  );
};

export default App;

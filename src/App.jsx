import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header, WrapperScroll } from './components';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import {
  CartPage,
  CategoryPage,
  HomePage,
  LoginPage,
  MensPage,
  PageNotFound,
  ProductPage,
  RegisterPage,
} from './pages';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<WrapperScroll />}>
          <Route path="/" element={<Navigate to="/mens" />} />
          <Route path="/mens" element={<MensPage />}>
            <Route path="" element={<HomePage />} />
            <Route path=":categoryId" element={<CategoryPage />} />
            <Route path=":categoryId/:productId" element={<ProductPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/:categoryId" element={<CategoryPage />} />
        <Route path="/:categoryId/:productId" element={<ProductPage />} />
        <Route path="/*" element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

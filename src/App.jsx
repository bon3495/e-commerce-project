import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductCategory from './pages/ProductCategory';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/product-category/:categoryId"
          element={<ProductCategory />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

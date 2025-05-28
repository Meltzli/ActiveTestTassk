import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart'
const { Header, Content } = Layout;
const App = () => (
  <Router>
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="products">
            <Link to="/products">Товары</Link>
          </Menu.Item>
          <Menu.Item key="favorites">
            <Link to="/favorites">Избранное</Link>
          </Menu.Item>
          <Menu.Item key="cart">
            <Link to="/cart">Корзина</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
      </Content>
    </Layout>
  </Router>
);

export default App;

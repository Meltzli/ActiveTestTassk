import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Spin, Empty } from 'antd';
import { fetchProducts } from '../store/productsSlice';
import ProductCard from "../components/productCard"

const Products = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Spin size="large" />;
  if (error) return <div>{`Ошибка: ${error}`}</div>;
  if (!products.length) return <Empty description="Нет товаров" />;

  return (
    <Row gutter={[16, 16]}>
      {products.map(product => (
        <Col key={product.id} span={6}>
          <div style={{ height: '100%' }}>
            <ProductCard product={product} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Products;

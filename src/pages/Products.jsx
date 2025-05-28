import React from 'react';
import { Card, Button, Row, Col } from 'antd';

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Товар ${i + 1}`,
  price: `${(i + 1) * 10}₽`,
  inStock: i % 3 !== 0,
  image: null,
}));

const Products = () => (
  <Row gutter={[16, 16]}>
    {products.map(product => (
      <Col key={product.id} span={6}>
        <Card
          cover={
            <img
              alt={product.name}
              src={product.image || '../assets/placeholder.webp'}
              style={{ objectFit: 'cover', height: 200 }}
            />
          }
          actions={[
            product.inStock ? (
              <>
                <Button type="primary" disabled>
                  В корзине
                </Button>
                <Button disabled>В избранном</Button>
              </>
            ) : (
              <Button disabled>Отсутствует</Button>
            ),
          ]}
        >
          <Card.Meta title={product.name} description={product.price} />
        </Card>
      </Col>
    ))}
  </Row>
);

export default Products;
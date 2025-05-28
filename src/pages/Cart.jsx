import React from 'react';
import { Card, Button, Empty, Row, Col } from 'antd';

const cartItems = []; // Пока пусто

const Cart = () => {
  if (!cartItems.length) {
    return <Empty description="Нет товаров в корзине" />;
  }

  return (
    <Row gutter={[16, 16]}>
      {cartItems.map(product => (
        <Col key={product.id} span={6}>
          <Card
            cover={
              <img
                alt={product.name}
                src={product.image || 'https://via.placeholder.com/150'}
                style={{ objectFit: 'cover', height: 200 }}
              />
            }
            actions={[<Button danger>Удалить из корзины</Button>]}
          >
            <Card.Meta title={product.name} description={product.price} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cart;
import React from 'react';
import { Card, Button, Empty, Row, Col } from 'antd';

const favorites = []; // Пока пусто

const Favorites = () => {
  if (!favorites.length) {
    return <Empty description="Нет товаров в избранном" />;
  }

  return (
    <Row gutter={[16, 16]}>
      {favorites.map(product => (
        <Col key={product.id} span={6}>
          <Card
            cover={
              <img
                alt={product.name}
                src={product.image || 'https://via.placeholder.com/150'}
                style={{ objectFit: 'cover', height: 200 }}
              />
            }
            actions={[<Button danger>Удалить из избранного</Button>]}
          >
            <Card.Meta title={product.name} description={product.price} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Favorites;
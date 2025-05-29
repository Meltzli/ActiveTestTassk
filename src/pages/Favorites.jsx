import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Empty, Row, Col } from 'antd';
import { removeFromFavorites } from '../store/favoritesSlice';
import Image from "../assets/placeholder.webp"
const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  if (favorites.length === 0) {
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
                src={product.preview_picture || Image}
                style={{ objectFit: 'cover', height: 200 }}
              />
            }
            actions={[
              <Button danger onClick={() => dispatch(removeFromFavorites(product))}>
                Удалить из избранного
              </Button>,
            ]}
          >
            <Card.Meta title={product.name} description={product.price} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Favorites;

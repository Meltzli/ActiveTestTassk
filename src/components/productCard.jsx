import React from 'react';
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { addToFavorites } from '../store/favoritesSlice';
import Image from "../assets/placeholder.webp"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const favorites = useSelector(state => state.favorites);

  const isInCart = cart.some(item => item.id === product.id);
  const isInFavorites = favorites.some(item => item.id === product.id);

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <Card
      style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      cover={
        <div style={{ height: 200, overflow: 'hidden' }}>
          <img
            alt={product.name}
            src={product.preview_picture || Image}
            style={imageStyle}
          />
        </div>
      }
      actions={[
        product.quantity > 0 ? (
          isInCart ? (
            <Button type="primary" disabled>В корзине</Button>
          ) : (
            <Button type="primary" onClick={() => dispatch(addToCart(product))}>В корзину</Button>
          )
        ) : (
          <Button disabled>Отсутствует</Button>
        ),
        isInFavorites ? (
          <Button disabled>В избранном</Button>
        ) : (
          <Button onClick={() => dispatch(addToFavorites(product))}>В избранное</Button>
        ),
      ]}
    >
      <Card.Meta
        title={product.name}
        description={
          product.price_discount
            ? `${product.price_discount} ₽ (Скидка)`
            : `${product.price} ₽`
        }
      />
    </Card>
  );
};

export default ProductCard;

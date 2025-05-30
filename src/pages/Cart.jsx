import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Empty } from "antd";
import ProductCard from "../components/productCard";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  if (!cartItems.length) {
    return <Empty description="Нет товаров в корзине" />;
  }

  return (
    <Row gutter={[16, 16]}>
      {cartItems.map((product) => (
        <Col key={product.id} span={6}>
          <div style={{ height: "100%" }}>
            <ProductCard product={product} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Cart;

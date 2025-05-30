import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Empty, Row, Col } from "antd";
import ProductCard from "../components/productCard";
const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  if (favorites.length === 0) {
    return <Empty description="Нет товаров в избранном" />;
  }

  return (
    <Row gutter={[16, 16]}>
      {favorites.map((product) => (
        <Col key={product.id} span={6}>
          <div style={{ height: "100%" }}>
            <ProductCard product={product} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Favorites;

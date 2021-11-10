import React, { useContext } from "react";

import { Container, Row } from "react-bootstrap";

import { ProductsContext } from "../../Context/ProductsContext";

import { FeaturedProduct } from "../Shared/FeaturedProduct";

export const FeatureCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);
  return (
    <div>
      <Container>
        <h3>Productos Destacados</h3>
        <Row>{productItems}</Row>
      </Container>
    </div>
  );
};

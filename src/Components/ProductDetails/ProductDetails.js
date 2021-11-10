import React, { useContext, useState, useEffect } from "react";

import { Col, Container, Row, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { TrashFill } from "react-bootstrap-icons";

import { ProductsContext } from "../../Context/ProductsContext";
import { CartContext } from "../../Context/CartContext";
import { isInCart } from "../functions";
import { Layout } from "../Shared/Layout";

import "./ProductDetails.css";

const ProductDetails = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { addProduct, cartItems, increase, removeProduct } =
    useContext(CartContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    setProduct(product);
  }, [id, product, push, products]);

  if (!product) {
    return <Spinner animation="border" variant="success" />;
  }

  const { imageUrl, title, price, description } = product;
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <img src={imageUrl} alt="imagen-planta" className="imageProduct" />
          </Col>

          <Col>
            <h3>{title}</h3>
            <p>$ {price}</p>
            <p>{description}</p>
            <div className="buttonsDetails">
              {!isInCart(product, cartItems) && (
                <Button variant="dark" onClick={() => addProduct(product)}>
                  Agregar al Carrito
                </Button>
              )}
              {isInCart(product, cartItems) && (
                <>
                  <Button variant="success" onClick={() => increase(product)}>
                    Agregar Otro
                  </Button>
                  <TrashFill
                    onClick={() => removeProduct(product)}
                    style={{ margin: "6px" }}
                  />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetails;

import React, { useContext } from "react";

import { Card, Row, Col, Button } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";

import { Link } from "react-router-dom";

import { isInCart } from "../functions";
import { CartContext } from "../../Context/CartContext";

import "./FeaturedProduct.css";

export const FeaturedProduct = (props) => {
  const { title, imageUrl, price, id, description } = props;
  const product = { title, imageUrl, price, id, description };
  const { addProduct, cartItems, removeProduct } = useContext(CartContext);

  return (
    <Row>
      <Col sm={2}>
        <Card style={{ width: "14rem" }} className="cardProduct">
          <Link to={`product/${id}`}>
            <Card.Img
              variant="top widht=10%"
              src={imageUrl}
              alt="imagen"
              className="cardImg border"
            />
          </Link>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>$ {price}</Card.Text>

            {!isInCart(product, cartItems) && (
              <Button variant="dark" onClick={() => addProduct(product)}>
                Agregar al Carrito
              </Button>
            )}
            {isInCart(product, cartItems) && (
              <>
                <Button variant="success" onClick={() => addProduct(product)}>
                  Agregar Otro
                </Button>
                <TrashFill
                  onClick={() => removeProduct(product)}
                  style={{ margin: "6px" }}
                />
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>

    // <div className="conteiner">
    //   <Link to={`product/${id}`}>
    //     {" "}
    //     <div className="image">
    //       <img src={imageUrl} alt="imaagen" />
    //     </div>
    //     <div>
    //       <h3>{title}</h3>
    //       <p>$ {price}</p>
    //     </div>
    //   </Link>
    //   <div>
    //     {!isInCart(product, cartItems) && (
    //       <Button variant="dark" onClick={() => addProduct(product)}>
    //         agregar al carrito
    //       </Button>
    //     )}
    //     {isInCart(product, cartItems) && (
    //       <Button variant="primary" onClick={() => increase(product)}>
    //         add more
    //       </Button>
    //     )}
    //   </div>
    // </div>
  );
};

export default FeaturedProduct;

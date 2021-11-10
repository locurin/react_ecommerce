import React from "react";

import { Row, Col, Card } from "react-bootstrap";
import {
  TrashFill,
  DashCircleFill,
  PlusCircleFill,
} from "react-bootstrap-icons";

import "./CartItem.css";

export const CartItem = (props) => {
  const {
    title,
    imageUrl,
    price,
    quantity,
    id,
    description,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, imageUrl, price, quantity, id, description };

  return (
    <Row className="item">
      <Col>
        <Card style={{ width: "14rem" }} className="cardProduct">
          <Card.Img
            variant="top widht=10%"
            src={imageUrl}
            className="cartImg"
            alt="imagen-planta"
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>$ {price}</Card.Text>
            <Card.Text>cantidad: {quantity}</Card.Text>

            <PlusCircleFill width="30px" onClick={() => increase(product)} />
            {quantity >= 1 && (
              <TrashFill width="30px" onClick={() => removeProduct(product)} />
            )}
            {quantity > 1 && (
              <DashCircleFill width="30px" onClick={() => decrease(product)} />
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

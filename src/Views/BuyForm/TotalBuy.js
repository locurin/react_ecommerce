import React from "react";
import { Col } from "react-bootstrap";

export const TotalBuy = ({ itemCount, total, clearCart }) => {
  return (
    <Col
      className="block-example border rounded mb-0 "
      style={{ padding: "15px" }}
    >
      <p>Total Items: {itemCount}</p>
      <p>Total: $ {total}</p>
    </Col>
  );
};

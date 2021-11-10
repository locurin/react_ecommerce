import React from "react";
import { Button, Col } from "react-bootstrap";

export const Total = ({ itemCount, total, clearCart }) => {
  return (
    <Col
      className="block-example border rounded mb-0 "
      style={{ padding: "15px", width: "10%" }}
    >
      <p>Total Items: {itemCount}</p>
      <p>Total: $ {total}</p>

      {itemCount === 0 ? null : (
        <Button variant="dark" onClick={() => clearCart()}>
          Quitar Compras
        </Button>
      )}
    </Col>
  );
};

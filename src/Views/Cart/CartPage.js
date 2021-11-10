import React, { useContext } from "react";

import { Container, Row, Button } from "react-bootstrap";
import { Bag } from "react-bootstrap-icons";

import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext";

import "./CartPage.css";

import { Layout } from "../../Components/Shared/Layout";
import { CartItem } from "./CartItem";
import { Total } from "./Total";

export const CartPage = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);
  const funciones = { increase, decrease, removeProduct };

  return (
    <Layout>
      <Container className="container">
        <Row>
          <h1>
            <Bag />
            Tus Compras
          </h1>
        </Row>
        <Row>
          <Total itemCount={itemCount} total={total} clearCart={clearCart} />
        </Row>
        <Row>
          {cartItems.length === 0 ? (
            <div className="cartAviso">
              Todavía no agregaste nada al carrito
            </div>
          ) : (
            <>
              <Row>
                {cartItems.map((item) => (
                  <CartItem {...item} key={item.id} {...funciones} />
                ))}
              </Row>
            </>
          )}
        </Row>
      </Container>
      <div className="buttonCartContainer">
        {cartItems.length === 0 ? null : (
          <Link to="/form" className="buttonCart">
            <Button variant="success">Comprar!</Button>
          </Link>
        )}
      </div>
    </Layout>
  );
};

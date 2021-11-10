import React, { useState, useContext } from "react";

import { Button, Row, Container, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

import { db } from "../../firebase";

import { TotalBuy } from "./TotalBuy";
import { Layout } from "../../Components/Shared/Layout";
import { CartContext } from "../../Context/CartContext";

export const BuyForm = () => {
  const { itemCount, total, clearCart } = useContext(CartContext);
  const [cliente, setCliente] = useState({
    name: "",
    apellido: "",
    email: "",
    direccion: "",
  });
  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      await db.collection("Clientes").add(cliente);
      console.log("exito");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Layout>
        <Container>
          <Row>
            <TotalBuy itemCount={itemCount} total={total} />
          </Row>

          <Form style={{ margin: "7%" }}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="name"
                placeholder="Nombre"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="apellido"
                placeholder="Apellido"
                name="apellido"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@gmail.com"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="direccion"
                placeholder="Calle xxx, número 123"
                name="direccion"
                onChange={handleChange}
              />
            </Form.Group>

            <Link to="/thanks">
              <Button
                type="submit"
                variant="success"
                onClick={(handleSubmit, clearCart)}
              >
                Terminar compra
              </Button>
            </Link>
          </Form>
        </Container>
      </Layout>
    </>
  );
};

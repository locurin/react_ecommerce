import React from "react";

import { Button, Container, Row } from "react-bootstrap";

import { Layout } from "../../Components/Shared/Layout";

import { Link } from "react-router-dom";

export const BuyFinished = () => {
  return (
    <>
      <Layout>
        <Container>
          <Row>
            <h1>¡Ya terminaste la compra!</h1>
          </Row>
          <Row>
            <Link to="/" style={{ marginTop: "2%" }}>
              <Button variant="success">Volve a la tienda</Button>
            </Link>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

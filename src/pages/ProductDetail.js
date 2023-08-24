import React from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";

const productsArr = [
  {
    id: "p-1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p-2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p-3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p-4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProdcutDetail = () => {
  const params = useParams();
  console.log(params.productId);

  const product = productsArr.find((data) => data.id === params.productId);

  return (
    <>
      <h1 className="text-center my-3">Product Details</h1>
      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <img src={product.imageUrl} />
          </Col>
          <Col className="text-start">
            <p>{product.title}</p>
            <h2>${product.price}</h2>
            <Button variant="primary" size="sm" className="px-3 d-inline">4★</Button>
            <p className="d-inline">154 ratings and 1,243 reviews</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProdcutDetail;

import React, { useContext } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Items from "../Items/Items";
import CartContext from "../../store/cart-context";

const productsArr = [
  {
    id: 'p-1',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 'p-2',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 'p-3',
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 'p-4',
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableItems = () => {
  const cartCtx = useContext(CartContext);

  const itemsData = productsArr.map((item) => (
    <Items
      key={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      quantity={1}
      id={item.id}
    />
  ));
  return (
    <React.Fragment>
      <Container className="mt-3">
        <h1 className="text-center py-3 fw-bold">Music</h1>
        <Container className="text-center">
          <Row>{itemsData}</Row>
        </Container>
      </Container>
      <Container className="text-center my-4">
        <Button className="btn-secondary text-info fw-bold " onClick={cartCtx.setCartDisplay}>
          See the Cart
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default AvailableItems;

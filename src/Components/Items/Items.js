import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import AuthContext from "../auth/auth-context";

const Items = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const addItemHandler = async () => {
    try {
      cartCtx.addItems(props);
      const email = authCtx.email.replace(/[@.]/g, "");
      console.log(email);
      const response = await fetch(
        `https://crudcrud.com/api/a4194fccc2854f2e94f1060324a5ab35/cart${email}`,
        {
          method: "POST",
          body: JSON.stringify({
            ...props
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      //cartCtx.addItems({ ...props, id: data._id });
    } catch (err) {}
  };

  return (
    <Col className="col-6 md-12 g-5" key={props.imageUrl}>
      <h3 className="py-3">{props.title}</h3>
      <Container>
        <Link to={`products/${props.id}`}>
          <img src={props.imageUrl} alt={props.title} />
        </Link>
      </Container>
      <Container className="d-flex justify-content-around align-propss-center my-2">
        <span>${props.price}</span>
        <Button
          type="button"
          className="btn-info fw-bold text-white rounded-1"
          onClick={addItemHandler}
        >
          ADD TO CART
        </Button>
      </Container>
    </Col>
  );
};

export default Items;

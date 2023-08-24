import React, { useContext, useEffect, useState } from "react";

import { Button, Modal, Table, Form, CardGroup } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import AuthContext from "../auth/auth-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const removeItemHandler =  (e) => {
    // try {
    //   const currentId = e.target.id;
    //   const item = cartCtx.items.filter(item => item.id === currentId);
    //   const id = item[0]._id;
    //   const email = authCtx.email.replace(/[@.]/g, "");
    //   console.log(id);
    //   cartCtx.removeItem(currentId);
    //   await fetch(
    //     `https://crudcrud.com/api/584eec8fdb084932b2e2edcda0819416/cart${email}/${id}`,
    //     {
    //       method: "DELETE",
    //     }
    //   );
    // } catch (err) {
    //   alert(err);
    // }
    cartCtx.removeItem(e.target.id);
  };

  const { isDataFetched } = cartCtx;

  useEffect(() => {
    if (authCtx.token && cartCtx.items.length === 0 && !isDataFetched ) {
      cartCtx.setIsDataFetched();
      const email = authCtx.email.replace(/[@.]/g, "");
      fetch(
        `https://crudcrud.com/api/a4194fccc2854f2e94f1060324a5ab35/cart${email}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json.then((data) => {
              throw new Error("something went wrong");
            });
          }
        })
        .then((data) => {
          data.forEach((element) => {
            cartCtx.addItems(element);
          });
        })
        .catch((err) => {
          alert(err.message);
        });
      //cartCtx.addItems
    }
  }, []);

  let cartItems = cartCtx.items.map((item) => {
    return (
      <tr className="mb-2" key={item.id}>
        <td>
          <img src={item.imageUrl} style={{ width: "75px" }} />
          {item.title}
        </td>
        <td>{item.price}</td>
        <td className="d-flex align-items-center justify-content-center">
          <Form.Control
            type="text"
            size="sm"
            value={item.quantity}
            onChange={() => {}}
            style={{ width: "2rem" }}
          />
          <Button
            variant="danger"
            className="btn-sm m-2"
            onClick={removeItemHandler}
            id={item.id}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  const total = cartCtx.items.reduce((total, item) => total + item.price, 0);

  return (
    <Modal show={props.show} onHide={props.onClose} backdrop={false}>
      <Modal.Header closeButton>
        <Modal.Title className="ps-2 fw-bold">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table borderless>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <h2 className="d-block text-end">${total}</h2>
        <Button variant="secondary" className="btn d-block">
          Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;

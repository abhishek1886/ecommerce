import React, { useState } from "react";

import { Container, Form, Card, Button } from "react-bootstrap";

const ContactInput = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const formInputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const inputData = {...formData};
    
    const response = await fetch("https://react-http-7ab92-default-rtdb.firebaseio.com/inputData.json", {
      method: "POST",
      body: JSON.stringify(inputData),
      headers: {
        "Content-Type": "application/json"
      }
    })
  };

  return (
    <Container className="my-5" style={{ maxWidth: "450px" }}>
      <Card className="p-3 bg-secondary bg-gradient">
        <Form onSubmit={formSubmitHandler}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={formInputHandler}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={formInputHandler}
          />
          <Form.Label>Number</Form.Label>
          <Form.Control
            required
            type="number"
            name="number"
            value={formData.number}
            onChange={formInputHandler}
          />
          <div className="text-center">
            <Button type="submit" variant="info" className="mt-3">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default ContactInput;

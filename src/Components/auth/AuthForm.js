import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Container, Form, Card, Button } from "react-bootstrap";

import AuthContext from "./auth-context";

const key = "AIzaSyCbYbxqcehfNw4YLqLt4SVHVjW-4cLnlsY";

const AuthForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const formInputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleAutoLogOut = () => {
    localStorage.removeItem("key");
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      const inputData = {
        ...formData,
        returnSecureToken: true,
      };

      setisLoading(true);
      let url;
      if (isLogin) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
      } else {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setisLoading(false);
      if (response.ok && isLogin) {
        const data = await response.json();
        authCtx.login({ email: data.email, token: data.idToken });
        localStorage.setItem("key", data.idToken);
        localStorage.setItem("email", data.email);
        history.replace("/store");
      } else if (response.ok && !isLogin) {
        setIsLogin(true);
        setFormData({
          email: "",
          password: "",
        });
      } else {
        throw new Error("Authentication failed. Try again!");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container className="p-5" style={{ maxWidth: "450px" }}>
      <Card className="p-3">
        <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            required
            onChange={formInputHandler}
            name="email"
            value={formData.email}
          />
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            required
            onChange={formInputHandler}
            name="password"
            value={formData.password}
          />
          <div className="d-flex flex-column align-items-center justify-content-center gap-2  mt-2">
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
              <Button variant="info" type="submit">
                {isLogin ? "Log In" : "Sign Up"}
              </Button>
            )}
            <Button
              variant="border-white"
              className="border-none"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Log in with existing account"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthForm;

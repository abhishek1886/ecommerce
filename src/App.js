import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AvailableItems from "./Components/Layout/AvailableItems";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import ContactUs from "./pages/ContactUs";
import ProdcutDetail from "./pages/ProductDetail";
import AuthPage from "./pages/AuthPage"
import AuthContext from "./Components/auth/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem('key');
    const email = localStorage.getItem('email')
    if(token && email){
      authCtx.login({token: token, email: email});
    }
    
  }, [])

  return (
    <React.Fragment>
      <Header />

      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/store">
            {authCtx.isLoggIn && <AvailableItems />}
            {!authCtx.isLoggIn && <Redirect to='/auth' />}
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          {!authCtx.isLoggIn && <Route path='/auth'>
            <AuthPage />
          </Route>}
          <Route path="/products/:productId">
            <ProdcutDetail />
          </Route>
          <Route path="*">
            <Redirect to='/home' />
          </Route>
        </Switch>
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;

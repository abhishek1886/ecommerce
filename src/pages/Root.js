import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
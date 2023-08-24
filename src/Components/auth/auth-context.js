import React, { useState } from "react";

const AuthContext = React.createContext({
  token: null,
  isLoggIn: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [data, setData] = useState(null);

  const userLoggedIn = !!data;

  const loginHandler = (tokenData) => {
    setData({
      email: tokenData.email,
      token: tokenData.token
    });
  }

  const logoutHandler = () => {
    setData(null);
    localStorage.removeItem('key');
    localStorage.removeItem('email');
  }

  const contextValue = {
    token: data === null ? null : data.token,
    email: data === null ? null : data.email,
    isLoggIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
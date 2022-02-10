import React, { FunctionComponent } from "react";
import Header from "../header";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

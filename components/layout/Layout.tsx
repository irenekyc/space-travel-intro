import React, { FunctionComponent } from "react";
import Header from "../header";
import styles from "./Layout.module.scss";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

import React, { FunctionComponent, useState } from "react";
import styles from "./Header.module.scss";

import Logo from "../logo";
import { HamburgerIcon, CloseIcon } from "../icons";
import MobileMenu from "../moible-menu";
import classnames from "classnames";

const Header: FunctionComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.nav__left}>
            <Logo />
            <button
              onClick={toggleMenu}
              className={classnames(
                styles.hideInMD,
                styles.nav__mobileMenuButton
              )}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        clickOnNavItem={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
export default Header;

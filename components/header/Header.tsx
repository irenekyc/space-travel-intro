import React, { FunctionComponent, useState } from "react";
import styles from "./Header.module.scss";

import Logo from "../logo";
import { HamburgerIcon, CloseIcon } from "../icons";
import MobileMenu from "../moible-menu";
import classnames from "classnames";
import { RoutesType } from "../../typings/Routes";
import { SITE_ROUTES } from "../../constants/site-navigation";
import NavItem from "../nav-item";

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
          <div className={styles.nav__right}>
            <ul>
              {SITE_ROUTES.map((route: RoutesType) => (
                <li key={route.number} className={styles.nav__item}>
                  <NavItem navData={route} clickOnItem={() => {}} />
                </li>
              ))}
            </ul>
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

import React, { FunctionComponent } from "react";

import classnames from "classnames";
import { SITE_ROUTES } from "../../constants/site-navigation";
import { RoutesType } from "../../typings/Routes";
import NavItem from "../nav-item";
import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  isOpen: boolean;
  clickOnNavItem: () => void;
}
const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  isOpen,
  clickOnNavItem,
}: MobileMenuProps) => {
  return (
    <div
      className={classnames(styles.mobileMenu, {
        [styles.mobileMenu__active]: isOpen,
        [styles.mobileMenu__close]: !isOpen,
      })}
    >
      <ul>
        {SITE_ROUTES.map((route: RoutesType) => (
          <li key={route.number} className={styles.mobileMenu__item}>
            <NavItem
              navData={route}
              className={styles.mobileMenu__tab}
              clickOnItem={clickOnNavItem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;

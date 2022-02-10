import React, { FunctionComponent } from "react";
import { RoutesType } from "../../typings/Routes";
import Link from "next/link";
import styles from "./NavItem.module.scss";
import { useRouter } from "next/router";
import classnames from "classnames";

interface NavItemProps {
  navData: RoutesType;
  className?: string;
  clickOnItem: () => void;
}

const NavItem: FunctionComponent<NavItemProps> = ({
  navData,
  className,
  clickOnItem,
}: NavItemProps) => {
  const { vanityName, route, number } = navData;
  const Router = useRouter();
  const isActive = Router.pathname === route;

  return (
    <div
      className={classnames(styles.navItem, className, {
        [styles.navItem__active]: isActive,
      })}
      onClick={clickOnItem}
    >
      <Link
        href={{
          pathname: route,
        }}
        passHref
      >
        <a>
          <strong className={styles.navItem__number}>{number}</strong>
          <span className={styles.navItem__text}>{vanityName}</span>
        </a>
      </Link>
    </div>
  );
};
NavItem.defaultProps = {
  className: "",
};

export default NavItem;

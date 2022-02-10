import React, { FunctionComponent } from "react";
import classnames from "classnames";
import styles from "./Logo.module.scss";
import { ROUTE_HOME } from "../../constants/site-navigation";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo: FunctionComponent<LogoProps> = ({ className }: LogoProps) => {
  return (
    <Link
      href={{
        pathname: ROUTE_HOME,
      }}
      passHref
    >
      <a className={classnames(styles.logo, className)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </a>
    </Link>
  );
};

Logo.defaultProps = { className: "" };

export default Logo;

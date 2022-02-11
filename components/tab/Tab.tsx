import React, { FunctionComponent, ButtonHTMLAttributes } from "react";
import {
  ACTIVE_STYLE_UNDERLINE,
  ACTIVE_STYLE_FILLED,
} from "../../constants/tabs";
import classnames from "classnames";
import styles from "./Tab.module.scss";

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isActive: boolean;
  activeStyles: typeof ACTIVE_STYLE_UNDERLINE | typeof ACTIVE_STYLE_FILLED;
  className?: string;
}

const Tab: FunctionComponent<TabProps> = ({
  label,
  isActive,
  activeStyles,
  className = "",
  ...props
}: TabProps) => {
  return (
    <button
      className={classnames(styles.tab, className, {
        [styles.tab__active]: isActive,
        [styles.tab__underline]: activeStyles === ACTIVE_STYLE_UNDERLINE,
        [styles.tab__filled]: activeStyles === ACTIVE_STYLE_FILLED,
      })}
      {...props}
    >
      {label}
    </button>
  );
};

export default Tab;

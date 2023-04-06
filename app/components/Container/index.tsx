import { PropsWithChildren } from "react";
import cx from "classnames";

import styles from "./container.module.css";

export default function Container({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={cx(styles.container, className)}>{children}</div>;
}

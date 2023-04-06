"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";

import styles from "./navlink.module.css";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children }: Props) {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link
      className={cx(styles.navlink, {
        [styles.active]: isActive,
      })}
      href={href}
    >
      {children}
    </Link>
  );
}

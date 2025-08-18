"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface navItemProps {
  text: string;
  linkPath: string;
}

/**
 * Determines if a nav item is the active page and returns an appropriately styled link
 * @param  {navItemProps}  props  An object containing two strings; the link text, and its target path
 * @returns {React.FC}  A react component
 */
function NavItem(props: navItemProps) {
  const isActive = usePathname() === props.linkPath;

  if (isActive) {
    return (
      <li>
        <Link
          href={props.linkPath}
          className="text-amber-400 not-dark:text-amber-800"
        >
          {props.text}
        </Link>
      </li>
    );
  } else {
    return (
      <Link
        href={props.linkPath}
        className="text-emerald-500 not-dark:text-emerald-900"
      >
        {props.text}
      </Link>
    );
  }
}

export default NavItem;

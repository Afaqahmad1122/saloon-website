import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatments",
    name: "Treatments",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={` ${pathname === link.href && "border-b-2 border-accent"}
             uppercase`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

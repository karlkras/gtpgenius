import Link from "next/link";

const links = [
  { label: "Chat", href: "/chat"  },
  { label: "Tours", href: "/tours"  },
  { label: "New Tours", href: "/tours/new-tour"  },
  { label: "Profile", href: "/profile"  }
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map( aLink => (
        <li key={aLink.href}>
          <Link href={aLink.href} className="capitalize">{aLink.label}</Link>
        </li>
      ) )}
    </ul>
  )
}
export default NavLinks

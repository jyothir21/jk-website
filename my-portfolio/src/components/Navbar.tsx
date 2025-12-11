import React from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#coop", label: "Co-op Reports" },
  { href: "#contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "#home") {
      // Override default anchor jump and go to the actual top
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // For everything else, let the browser handle it (uses scroll-padding-top)
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#" className="logo">
          <span className="logo-gradient">JK</span>
        </a>

        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

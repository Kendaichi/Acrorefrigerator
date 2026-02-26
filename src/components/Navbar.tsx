import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import acroLogo from "@/assets/acro-logo.png";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-xl tracking-tight"
        >
          <img
            src={acroLogo}
            alt="Acro Refrigeration"
            className="h-10 w-10 object-contain"
          />
          <span>Acro Refrigeration</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-secondary ${
                location.pathname === link.href
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:1300227600"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            1300 227 600
          </a>
          <Button asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2.5 -mr-1"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="tel:1300227600"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" /> 1300 227 600
            </a>
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

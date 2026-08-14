import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-amber-600"
        : "text-slate-700 hover:text-amber-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">

      {/* Main Navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <div className="text-xl font-bold tracking-wide text-slate-900">
            T.O ANIFOWOSE
          </div>

          <div className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-amber-600">
            REAL ESTATE
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/properties" className={navClass}>
            Properties
          </NavLink>

          <NavLink to="/agents" className={navClass}>
            Agents
          </NavLink>

          <NavLink to="/favorites" className={navClass}>
            Favorites
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>

          <NavLink to="/about">
  About
</NavLink>

        </nav>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600 md:flex"
        >
          <Phone size={16} />
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-slate-900 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-4">

          <NavLink
            to="/"
            onClick={closeMenu}
            className={navClass}
          >
            <span className="block border-b border-gray-100 py-4">
              Home
            </span>
          </NavLink>

          <NavLink
            to="/properties"
            onClick={closeMenu}
            className={navClass}
          >
            <span className="block border-b border-gray-100 py-4">
              Properties
            </span>
          </NavLink>

          <NavLink
            to="/agents"
            onClick={closeMenu}
            className={navClass}
          >
            <span className="block border-b border-gray-100 py-4">
              Agents
            </span>
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={closeMenu}
            className={navClass}
          >
            <span className="block border-b border-gray-100 py-4">
              Favorites
            </span>
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={navClass}
          >
            <span className="block py-4">
              Contact
            </span>
          </NavLink>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white"
          >
            <Phone size={17} />
            Get in Touch
          </Link>

        </nav>
      </div>

    </header>
  );
}

export default Navbar;
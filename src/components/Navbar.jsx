import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Education", to: "/" },
    { label: "About", to: "/" },
    { label: "Contact", to: "/" },
  ];

  return (
    <nav className="py-3 z-40 bg-white/90 backdrop-blur-md sticky top-0 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-14">
          <div className="flex gap-3 items-center">
            <img
              className="brand-logo h-12 w-auto object-contain"
              src={logo}
              alt="EduFlix logo"
              loading="eager"
              decoding="async"
            />
            <span className="brand-text font-bold text-lg text-[#1d3557]">
              EduFlix
            </span>
            <div className="hidden md:block">
              <div className="ml-8 flex items-center space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="px-3 py-2 rounded-lg text-sm font-semibold text-[#1d3557] hover:bg-[#d9e6f5] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/">
            <div className="hidden md:flex items-center gap-2 bg-[#1d3557] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#27476b] transition-colors">
              <i className="fa-regular fa-user" aria-hidden="true" />
              Log In
            </div>
          </Link>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-[#1d3557] inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#27476b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#1d3557]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden transition-all" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-[#d9e6f5] text-[#1d3557]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/profile/neo"
                className="block px-3 py-2 rounded-md text-base font-semibold bg-[#1d3557] text-white hover:bg-[#27476b]"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowImage from "../../assets/images/Vector (6).png";
import Rectangle from "../../assets/images/Rectangle 1686.png";
import KitchoLogo from "../../assets/images/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function SimpleNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="z-50 bg-white shadow-sm">
      <div className="mx-auto container flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={KitchoLogo} alt="Kitcho Logo" className="h-8" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-end gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-semibold transition-colors ${
                location.pathname === link.href
                  ? "text-[#0F172A] underline underline-offset-8 decoration-2 decoration-orange-500"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Login button */}
          <div className="hidden md:flex items-center">
            <Link to="/" className="flex items-center">
              {/* Main pill */}
              <div className="bg-white text-[#FA4A0C] font-medium text-lg px-6 py-2 rounded-[20px] border border-orange-500">
                Login
              </div>

              {/* Connector */}
              <img src={Rectangle} alt="" className="w-5" />

              {/* Circle with icon */}
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-[20px]">
                <img src={ArrowImage} className="w-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-orange-100 bg-white"
          >
            <div className="px-5 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-medium ${
                    location.pathname === link.href
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500"
              >
                Login <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

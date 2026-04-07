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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="z-50">
      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden lg:flex mx-auto container items-center justify-between pt-6">
        {/* Logo */}
        <div className="relative inline-block w-full max-w-md">
          {/* Background shape */}
          <div className="absolute inset-0 bg-white clip-slant" />

          {/* Text */}
          <Link
            to="/landing"
            className="relative text-3xl pl-15 font-semibold text-gray-900 px-6 py-3 block"
          >
            <img src={KitchoLogo} alt="Kitcho Logo" className="" />
          </Link>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-semibold ${
                location.pathname === link.href
                  ? "text-[#0F172A] underline underline-offset-8 decoration-orange-500"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Login */}
          <Link to="/auth" className="flex items-center">
            <div className="bg-white text-[#FF5A1F] font-medium px-6 py-2 rounded-[20px]">
              Login
            </div>

            <img src={Rectangle} className="w-5" />

            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-[20px]">
              <img src={ArrowImage} className="w-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div className="lg:hidden flex items-center justify-between px-5 py-4 bg-white shadow-sm">
        {/* Logo */}
        <Link to="/landing">
          <img src={KitchoLogo} className="w-28" />
        </Link>

        {/* Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
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

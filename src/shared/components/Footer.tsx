import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="relative mx-auto container px-5">
        {/* Centered Icons */}
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} className="text-[#FF5A1F]" />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} className="text-[#FF5A1F]" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className="text-[#FF5A1F]" />
          </a>
        </div>

        {/* Right Text */}
        <p className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-gray-500">
          Copyright 2025 Kitcho Lab
        </p>
      </div>
    </footer>
  );
}

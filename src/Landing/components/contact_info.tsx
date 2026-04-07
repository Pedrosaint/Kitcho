import { Headphones, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="mx-auto container">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 bg-white text-sm text-gray-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            CONTACT INFO
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FF5A1F]">
            We're Here to Help.
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
            Reach out to Kitcho for support, questions, feedback, or partnership
            opportunities. Our friendly team is ready to assist you
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Customer Support */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center">
              <Headphones size={20} className="text-[#FF5A1F]" />
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-3">
                Customer Support
              </p>

              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <Mail size={14} className="text-gray-400 shrink-0" />
                support@kitcho.com
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone size={14} className="text-gray-400 shrink-0" />
                +234 (000) 000 0000
              </div>
            </div>

            <p className="text-gray-400 text-xs mt-auto">
              Available 9am-5pm, Mon-Sat
            </p>
          </div>

          {/* Whatsapp & Socials */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center">
              <MessageCircle size={20} className="text-[#FF5A1F]" />
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-3">
                Whatsapp & Socials
              </p>

              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <MessageCircle size={14} className="text-gray-400 shrink-0" />
                +234 (000) 000 0000
              </div>

              <p className="text-gray-500 text-sm mb-3">
                Follow us on social media
              </p>

              <div className="flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center hover:bg-[#FF5A1F] group transition-colors"
                >
                  <FaInstagram
                    size={14}
                    className="text-[#FF5A1F] group-hover:text-white transition-colors"
                  />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center hover:bg-[#FF5A1F] group transition-colors"
                >
                  <FaTwitter
                    size={14}
                    className="text-[#FF5A1F] group-hover:text-white transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center">
              <MapPin size={20} className="text-[#FF5A1F]" />
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-3">Office Address</p>

              <p className="text-gray-500 text-sm leading-relaxed">
                123 Commerce Street
                <br />
                Victoria Island
                <br />
                Lagos, Nigeria
                <br />
                100001
              </p>
            </div>

            <p className="text-gray-400 text-xs mt-auto">
              Visit our office during working hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

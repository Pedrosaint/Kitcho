import ContactIllustration from "../../assets/images/chat_with_us.png";

export default function ContacInfoTwo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Illustration */}
          <div className="flex items-center justify-center">
            <img
              src={ContactIllustration}
              alt="Contact Illustration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right — Form */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 bg-white text-sm text-gray-600 font-medium w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
              CONTACT INFO
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-[#FF5A1F]">Reach</span> & Get In Touch With
              Us!
            </h2>

            {/* Form */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-100 rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#FF5A1F]/30"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-100 rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#FF5A1F]/30"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-gray-100 rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#FF5A1F]/30"
              />
              <textarea
                placeholder="Tell us how we can help you"
                rows={4}
                className="w-full bg-gray-100 rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#FF5A1F]/30 resize-none"
              />

              <button className="w-fit bg-[#FF5A1F] text-white text-sm font-semibold uppercase tracking-widest rounded-full px-8 py-4 hover:bg-[#e5430b] transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import Illustration from "../../assets/images/faq_image.svg";
import FaqLine from "../../assets/images/faq_line.svg";
import Shadow from "../../assets/images/shadow.png";

export default function FAQHero() {


  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Decorative send icon — left */}

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-40">
          {/* Left — Text + Accordion */}
          <div className="mx-auto container px-55">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Find quick answers to common questions about ordering, menus,
              delivery, and using Kitcho.
            </p>
          </div>
          <img
            src={FaqLine}
            alt=""
            className="absolute -bottom-1 xl:left-55 object-contain"
          />
          {/* Right — 3D illustration */}
          {/* Right — 3D illustration */}
          <div className="relative">
            <img
              src={Illustration}
              alt="Illustration"
              className="w-full max-w-575 h-full object-contain relative"
            />
            {/* Shadow below illustration */}
            <img
              src={Shadow}
              alt=""
              className="absolute -bottom-15 w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

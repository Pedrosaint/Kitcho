import { motion } from "framer-motion";
import { ChefHat, UtensilsCrossed, ShoppingCart } from "lucide-react";
import foodImage from "../../assets/images/hero_image.png";
import GooglePlayIcon from "../../assets/icons/google-play.svg";
import AppleIcon from "../../assets/icons/apple.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden lg:block">
        <div className="mx-auto container bg-white px-15 py-16 sm:py-24 rounded-tr-2xl rounded-bl-2xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold leading-tight text-gray-900">
                Why Stress Yourself Cooking <br />
                When <span className="text-[#FF5A1F]">Great</span> Food Is Just
                Minutes Away
              </h1>

              <p className="mt-4 text-gray-500">
                Download the Kitcho app now on
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-3 rounded-[30px] shadow-lg border bg-[#FF5A1F] pl-4 pr-7 py-3 text-white hover:bg-[#e5430b]">
                  <img src={GooglePlayIcon} className="w-8 h-8 invert" />
                  <div>
                    <p className="text-[10px]">GET IT ON</p>
                    <p className="text-lg font-bold">Google Play</p>
                  </div>
                </button>

                <button className="inline-flex items-center gap-3 rounded-[30px] border border-gray-700 bg-white pl-4 pr-7 py-3 text-gray-900">
                  <img src={AppleIcon} className="w-8 h-8" />
                  <div>
                    <p className="text-[10px] opacity-60">Download on the</p>
                    <p className="text-lg font-bold">App Store</p>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Floating icons */}
              <div className="absolute -top-2 left-10 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-md">
                <UtensilsCrossed size={18} className="text-orange-500" />
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-md">
                <ChefHat size={18} className="text-orange-500" />
              </div>

              <div className="absolute bottom-4 left-1/3 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-md">
                <ShoppingCart size={18} className="text-orange-500" />
              </div>

              <img
                src={foodImage}
                className="w-full h-120 object-contain"
                style={{ filter: "drop-shadow(0px 20px 40px #FF5A1F99)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VERSION ================= */}
      <div className="lg:hidden px-5 py-12 text-center bg-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold leading-tight text-gray-900"
        >
          Why Stress Cooking When{" "}
          <span className="text-[#FF5A1F]">Great Food</span> Is Minutes Away
        </motion.h1>

        <p className="mt-3 text-gray-500 text-sm">
          Download the Kitcho app now
        </p>

        {/* Image */}
        <motion.img
          src={foodImage}
          alt=""
          className="mx-auto mt-6 w-[85%] object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ filter: "drop-shadow(0px 20px 40px #FF5A1F99)" }}
        />

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 rounded-full bg-[#FF5A1F] py-3 text-white">
            <img src={GooglePlayIcon} className="w-6 h-6 invert" />
            Google Play
          </button>

          <button className="flex items-center justify-center gap-3 rounded-full border border-gray-300 py-3">
            <img src={AppleIcon} className="w-6 h-6" />
            App Store
          </button>
        </div>
      </div>
    </section>
  );
}

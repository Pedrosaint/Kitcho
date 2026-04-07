import { motion } from "framer-motion";
import { ChefHat, UtensilsCrossed, ShoppingCart } from "lucide-react";
import foodImage from "../../assets/images/hero_image.png";
import GooglePlayIcon from "../../assets/icons/google-play.svg";
import AppleIcon from "../../assets/icons/apple.svg";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden">
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
              <p className="mt-4 text-gray-500 text-sm sm:text-base">
                Download the Kitcho app now on
              </p>

              {/* App store buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-3 rounded-[30px] shadow-lg border bg-[#FF5A1F] pl-4 pr-7 py-3 text-white hover:bg-[#e5430b] transition-colors">
                  <img src={GooglePlayIcon} alt="" className="w-8 h-8 invert" />
                  <div className="text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-widest leading-none">
                      Get IT ON
                    </p>
                    <p className="text-lg font-bold leading-tight">
                      Google Play
                    </p>
                  </div>
                </button>
                <button className="inline-flex items-center gap-3 rounded-[30px] border border-gray-700 bg-white pl-4 pr-7 py-3 text-gray-900 shadow-sm hover:bg-gray-50 transition-colors">
                  <img src={AppleIcon} alt="" className="w-8 h-8" />
                  <div className="text-left">
                    <p className="text-[10px] font-medium tracking-wide leading-none opacity-60">
                      Download on the
                    </p>
                    <p className="text-lg font-bold leading-tight">App store</p>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Right — food image area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Floating icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 left-10 z-10 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-md"
              >
                <UtensilsCrossed size={18} className="text-orange-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-4 -right-2 sm:right-4 z-10 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-md"
              >
                <ChefHat size={18} className="text-orange-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 left-1/3 z-10 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-md"
              >
                <ShoppingCart size={18} className="text-orange-500" />
              </motion.div>

              {/* Main food image */}
              <img
                src={foodImage}
                alt="Delicious food platter"
                className="w-full h-120 object-contain"
                style={{ filter: "drop-shadow(0px 20px 40px #FF5A1F99)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { Rocket, Heart, Sparkles } from "lucide-react";
import type { Feature } from "../types/landing.types";
import Wave from "../../assets/images/waves.png";
import NairaIcon from "../../shared/components/NairaIcon";

const featureIcons: Record<string, typeof Rocket> = {
  rocket: Rocket,
  naira: NairaIcon,
  heart: Heart,
  sparkle: Sparkles,
};

interface Props {
  features: Feature[];
}

export default function WhyChooseKitcho({ features }: Props) {
  return (
    <section className="relative bg-[#FF5A1F1A] py-16 sm:py-20 overflow-hidden">
      <img src={Wave} alt="" className="absolute bottom-40 -z-10" />

      <div className="mx-auto container px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why Choose <span className="text-orange-500">Kitcho</span>?
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            We're not just another delivery app — we're your local food partner
          </p>
        </motion.div>

        {/* Feature cards — 2x2 grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = featureIcons[feature.icon] || Rocket;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                }}
                className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 flex gap-4 items-start transition-all"
              >
                <div
                  className={`shrink-0 w-11 h-11 rounded-xl bg-[#FF5A1F] flex items-center justify-center`}
                >
                  <Icon size={20} color="white" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <img
        src={Wave}
        alt=""
        className="absolute bottom-0 2xl:right-30 right-0 -z-10"
      />
    </section>
  );
}

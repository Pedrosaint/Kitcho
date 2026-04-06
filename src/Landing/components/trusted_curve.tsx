import { motion } from "framer-motion";

const TrustedCurve = () => {
  return (
    <div className="mx-auto container -mt-15">
      <div className="relative w-full xl:max-w-xl lg:max-w-lg">
        {/* Background shape */}
        <div className="absolute inset-0 bg-white clip-slant z-0" />

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-2xl sm:text-3xl font-bold text-gray-900 p-6"
        >
          Trusted by Thousands
        </motion.h2>
      </div>
    </div>
  );
};

export default TrustedCurve;

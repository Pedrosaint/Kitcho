import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Wave from "../../assets/images/waves.png";
import Justrite from "../../assets/images/justrite.png";
import JUMIA from "../../assets/images/jumai.png";
import Jijing from "../../assets/images/jiji.png";
import Paystack from "../../assets/images/paystack.png";
import Jendol from "../../assets/images/jendol.png";
import Glovo from "../../assets/images/glovo.png";

const reviews = [
  {
    name: "Amaka Okonkwo",
    role: "Busy Mom, Lagos",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Great food and fast delivery! I order from Kitcho almost every day. The app is so easy to use and the food always arrives hot.",
  },
  {
    name: "Chidi Eze",
    role: "Small business owner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "The variety of local kitchens is amazing. I can finally enjoy authentic home cooked meals without the hassle.",
  },
  {
    name: "Fatimah Yusuf",
    role: "University student",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "My sales increased by 150% since joining Kitcho. The platform is easy to manage and payouts are always on time!",
  },
];


const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={18} className="fill-[#FF5A1F] text-[#FF5A1F]" />
    ))}
  </div>
);

export default function CommunitySection() {
  return (
    <>
      <section className="bg-[#FFF5F0] py-20 relative overflow-hidden">
        {/* Decorative circle — top left */}
        <img src={Wave} alt="" className="absolute bottom-90" />

        <div className="mx-auto container px-5">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              What Our <span className="text-[#FF5A1F]">Community</span> Says
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Real stories from real people using Kitcho every day
            </p>
          </motion.div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-24">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pt-8 mt-6"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-sm overflow-visible relative h-full">
                  {/* Orange pill header — overflows top */}
                  <div className="absolute -top-3 -left-7 right-0 bg-[#FF5A1F] rounded-tl-full rounded-bl-full h-25 w-7" />
                  <div className="absolute top-10.5 -left-7 right-0 bg-[#9B4C2E] rounded-tl-full rounded-bl-full h-16 w-7" />
                  <div className="absolute -top-6 left-0 right-0 flex items-center justify-between px-4">
                    <div className="bg-[#FF5A1F] rounded-full px-5 py-3 flex-1 mr-8 -ml-10.5">
                      <p className="text-white font-bold text-sm">{r.name}</p>
                      <p className="text-white/80 text-xs">{r.role}</p>
                    </div>
                    {/* Avatar in peach circle */}
                    <div className="w-18 h-18 rounded-full bg-[#FFF5F0] flex items-center justify-center shrink-0">
                      <img
                        src={r.avatar}
                        alt={r.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="pt-12 pb-6 px-6">
                    <StarRating count={r.rating} />
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                      "{r.review}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        {/* Trusted By */}
        <div className="mx-auto container px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left — Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                Trusted By Leading
                <br />
                Organizations
              </h3>
            </motion.div>

            {/* Right — Partner logos 2x3 grid */}
            <div className="lg:w-2/3 grid gap-6">
              {/* Row 1 */}
              <div className="w-full flex items-center justify-center gap-2">
                <div className="w-1/3 rounded-lg flex items-center justify-center h-24 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow px-6">
                  <img
                    src={Justrite}
                    alt="Justrite"
                    className="max-h-14 max-w-full object-contain"
                  />
                </div>
                <div className="w-2/3 rounded-lg flex items-center justify-center h-24 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow px-6">
                  <img
                    src={JUMIA}
                    alt="JUMIA"
                    className="max-h-74 max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="w-full flex items-center justify-center gap-2">
                <div className="w-2/3 rounded-lg flex items-center justify-center h-24 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow px-6">
                  <img
                    src={Jijing}
                    alt="Jiji"
                    className="max-h-14 max-w-full object-contain"
                  />
                </div>
                <div className="w-1/3 rounded-lg flex items-center justify-center h-24 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow px-6">
                  <img
                    src={Paystack}
                    alt="Paystack"
                    className="max-h-74 max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="w-full flex items-center justify-center gap-2">
                <div className="w-1/3 rounded-lg flex items-center justify-center h-24 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow px-6">
                  <img
                    src={Jendol}
                    alt="Jendol"
                    className="max-h-44 max-w-full object-contain"
                  />
                </div>
                <div className="w-2/3 rounded-lg flex items-center justify-center h-24 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow px-6">
                  <img
                    src={Glovo}
                    alt="Glovo"
                    className="max-h-74 max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

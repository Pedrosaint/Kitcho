import GooglePlayIcon from "../../assets/icons/google-play.svg";
import AppleIcon from "../../assets/icons/apple.svg";
import ctaBg from "../../assets/images/footer_image.jpg";

export default function FooterSection() {
  return (
    <section
      className="relative overflow-hidden p-9"
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />


      {/* Content */}
      <div className="relative z-10 mx-auto container px-5 py-20 flex flex-col items-center text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Download the app now.
        </h2>
        <p className="text-sm sm:text-base text-white/80 mb-8">
          Available on your favorite store. Start your premium experience now
        </p>

        {/* App store buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="inline-flex items-center gap-3 rounded bg-[#FF5A1F] pl-4 pr-7 py-3 text-white hover:bg-[#e5430b] transition-colors shadow-lg">
            <img src={GooglePlayIcon} alt="" className="w-8 h-8 invert" />
            <div className="text-left">
              <p className="text-[10px] font-semibold uppercase tracking-widest leading-none">
                Get IT ON
              </p>
              <p className="text-lg font-bold leading-tight">Google Play</p>
            </div>
          </button>

          <button className="inline-flex items-center gap-3 rounded border border-white bg-white/10 backdrop-blur-sm pl-4 pr-7 py-3 text-white hover:bg-white/20 transition-colors shadow-lg">
            <img src={AppleIcon} alt="" className="w-8 h-8 invert" />
            <div className="text-left">
              <p className="text-[10px] font-medium tracking-wide leading-none opacity-60">
                Download on the
              </p>
              <p className="text-lg font-bold leading-tight">App store</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

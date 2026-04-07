import ctaBg from "../../assets/images/footer_image.jpg";

export default function ContactHero() {
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
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto container px-5 py-20 flex flex-col items-center text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Contact Us.
        </h2>
        <p className="text-sm sm:text-base text-white/80 mb-8">
          Reach out to Kitcho for support, questions, feedback, or partnership
          opportunities. Our friendly team is ready to assist you
        </p>
      </div>
    </section>
  );
}

import { useLanding } from "../hooks/useLanding";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import WhyChooseKitcho from "../components/WhyChooseKitcho";
import FlippedCurve from "../components/flipped_curve";
import TrustBadges from "../components/TrustBadges";
import TrustedCurve from "../components/trusted_curve";
import HowItWorks from "../components/how_it_works";
import CommunitySection from "../components/community_section";

export default function LandingPage() {
  const { stats, features, trustBadges, loading } = useLanding();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Hero />
      <FlippedCurve />

      {/*==================== Trusted by section ====================*/}
      <TrustedCurve />
      <TrustedBy stats={stats} trustBadges={trustBadges} />

      {/*==================== Trust badges section ====================*/}
      <TrustBadges trustBadges={trustBadges} />
      <WhyChooseKitcho features={features} />

      {/*==================== How it works section ====================*/}
      <HowItWorks />

      {/*==================== Community section ====================*/}
      <CommunitySection />
    </div>
  );
}

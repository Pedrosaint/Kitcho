import { Outlet } from "react-router-dom";
import Navbar from "../../Landing/components/Navbar";
import Footer from "../components/Footer";
import FooterSection from "../components/FooterSecttion";

export default function LandingLayout() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#FF5A1F2B]"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterSection />
      <Footer />
    </div>
  );
}

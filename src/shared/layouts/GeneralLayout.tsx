import { Outlet } from "react-router-dom";
import SimpleNavbar from "../components/SimpleNavbar";
import Footer from "../components/Footer";
import FooterSection from "../components/FooterSecttion";

export default function GeneralLayout() {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <SimpleNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterSection />
      <Footer />
    </div>
  );
}

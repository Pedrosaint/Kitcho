import { Outlet } from "react-router-dom";
import KitchoLogo from "../../assets/images/logo.png";
import AuthBg from "../../assets/images/chef.jpg";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Left — Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src={AuthBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a2e]/40" />
        <img
          src={KitchoLogo}
          alt="Kitcho"
          className="absolute top-8 left-8 h-10 z-10 brightness-0 invert"
        />
      </div>

      {/* Right — Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

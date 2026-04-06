import {
  Search,
  ShoppingCart,
  Truck,
  Clock,
  MapPin,
  CreditCard,
  Shield,
  Users,
  ClipboardList,
  Package,
} from "lucide-react";
import NairaIcon from "../../shared/components/NairaIcon";
import Wave from "../../assets/images/waves_2.png";
import StarWave from "../../assets/images//starwave.svg";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search size={24} className="text-[#FF5A1F]" />,
      title: "Browse Nearby Kitchens",
      description:
        "Discover local kitchens and restaurants offering delicious meals in your area.",
    },
    {
      icon: <ShoppingCart size={24} className="text-[#FF5A1F]" />,
      title: "Place Your Order",
      description:
        "Select your favorite dishes and customize your order with ease.",
    },
    {
      icon: <Truck size={24} className="text-[#FF5A1F]" />,
      title: "Get Fast Delivery",
      description:
        "Track your order in real-time and enjoy fresh food delivered to your door.",
    },
  ];

  const customerFeatures = [
    {
      icon: <Clock size={20} />,
      title: "Fast Delivery",
      description: "Get your food delivered in 30-40 minutes or less.",
    },
    {
      icon: <MapPin size={20} />,
      title: "Real-Time Tracking",
      description: "Track your order from the kitchen to your doorstep.",
    },
    {
      icon: <CreditCard size={20} />,
      title: "Secure Payments",
      description: "Multiple payment options with bank level security.",
    },
    {
      icon: <Shield size={20} />,
      title: "Verified Kitchens",
      description: "All our partner kitchens are verified and trusted.",
    },
  ];

  const chefFeatures = [
    {
      icon: <Users size={20} />,
      title: "Reach More Customers",
      description:
        "Connect with thousands of hungry customers in your local area.",
    },
    {
      icon: <ClipboardList size={20} />,
      title: "Easy Order Management",
      description: "Simple dashboard to manage orders and track your business.",
    },
    {
      icon: <NairaIcon size={20} className="" />,
      title: "Weekly Payouts",
      description:
        "Get paid reliably every week directly to your bank account.",
    },
    {
      icon: <Package size={20} />,
      title: "No Delivery Stress",
      description: "Focus on cooking while we handle the delivery logistics.",
    },
  ];

  return (
    <section className="bg-[#FFF5F0] py-20 relative">
      <img
        src={Wave}
        alt=""
        className="absolute top-0 right-0 w-96 h-96 object-cover z-0"
      />

      <img
        src={StarWave}
        alt=""
        className="absolute top-35 right-80 w-96 h-96 object-cover z-0"
      />

      <img
        src={StarWave}
        alt=""
        className="absolute top-135 left-55 w-96 h-96 object-cover z-0"
      />

      <div className="mx-auto container px-5">
        {/* How it works */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            How the app works
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Getting your favorite food delivered is as easy as 1-2-3
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 shadow-sm text-center z-10"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FF5A1F] text-white text-sm font-bold flex items-center justify-center shadow">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* For Customers */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            For <span className="text-[#FF5A1F]">Customers</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Everything you need for a seamless food ordering experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {customerFeatures.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm z-10">
              <div className="w-10 h-10 rounded-xl bg-[#FF5A1F] text-white flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* For Chefs */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            For <span className="text-[#FF5A1F]">Chefs</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Grow your culinary business with powerful tools and support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefFeatures.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm z-10">
              <div className="w-10 h-10 rounded-xl bg-[#FF5A1F] text-white flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
          <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5">
            <CheckCircle size={28} className="text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Check Your Email
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Password reset link sent to
            <br />
            <span className="font-medium text-gray-700">{email}</span>
          </p>
          <Link
            to="/auth"
            className="mt-6 inline-block w-full rounded-lg bg-[#FF5A1F] py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors text-center"
          >
            Back to Login
          </Link>
        </div>
    );
  }

  return (
    <>
      <Link
        to="/login"
        className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={16} />
        Back to Login
      </Link>

      <h1 className="text-2xl font-bold text-gray-900">Forgot Password?</h1>
      <p className="text-sm text-gray-500 mt-1">
        No worries! Enter your email and we'll send you a reset link.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-[#FF5A1F] py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
        >
          Send Reset Link
        </button>
      </form>
    </>
  );
}

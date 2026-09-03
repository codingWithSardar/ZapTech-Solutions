import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Register Data:", formData);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F1E8] text-[#352319]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(190,137,91,0.12),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(211,166,121,0.12),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(166,112,73,0.08),transparent_32%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(126,82,50,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(126,82,50,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [0, -25, 0, 25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[5%] top-[15%] h-56 w-56 rounded-full bg-[#B9794F]/10 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -35, 0, 35, 0],
          y: [0, 30, 0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full bg-[#C9956D]/10 blur-[120px]"
      />

      {/* Main */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =================================================
              LEFT — REGISTER FORM
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto w-full max-w-[480px]"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A96F46]/20 bg-[#B9794F]/[0.06] px-4 py-2 text-xs font-medium text-[#805235]"
            >
              <Sparkles size={14} />
              Create Your Account
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[#352319] sm:text-5xl">
              Welcome to
              <span className="block bg-gradient-to-r from-[#B9794F] via-[#A96F46] to-[#8D5838] bg-clip-text text-transparent">
                Zaphtech.
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#806E61]">
              Create your account and get started with powerful digital
              solutions built for your business.
            </p>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-8 rounded-[28px] border border-[#DCCFC2] bg-[#FFF9F3]/80 p-6 shadow-[0_25px_80px_rgba(111,78,55,0.10)] backdrop-blur-xl sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#624432]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A98A76]"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-[#DED1C5] bg-[#FBF6F0] py-3.5 pl-11 pr-4 text-sm text-[#352319] outline-none placeholder:text-[#B09C8C] transition-all duration-300 focus:border-[#B9794F]/50 focus:bg-white focus:ring-4 focus:ring-[#B9794F]/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#624432]">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A98A76]"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-[#DED1C5] bg-[#FBF6F0] py-3.5 pl-11 pr-4 text-sm text-[#352319] outline-none placeholder:text-[#B09C8C] transition-all duration-300 focus:border-[#B9794F]/50 focus:bg-white focus:ring-4 focus:ring-[#B9794F]/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#624432]">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A98A76]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      required
                      minLength={6}
                      className="w-full rounded-xl border border-[#DED1C5] bg-[#FBF6F0] py-3.5 pl-11 pr-12 text-sm text-[#352319] outline-none placeholder:text-[#B09C8C] transition-all duration-300 focus:border-[#B9794F]/50 focus:bg-white focus:ring-4 focus:ring-[#B9794F]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A98A76] transition-colors hover:text-[#8D5838]"
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>


                {/* Register Button */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 15px 35px rgba(141,88,56,0.18)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C58C63] via-[#B9794F] to-[#A96F46] px-5 py-3.5 text-sm font-bold text-white"
                >
                  Create Account

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#E4D8CD]" />

                <span className="text-[10px] font-medium uppercase tracking-wider text-[#A98A76]">
                  or
                </span>

                <div className="h-px flex-1 bg-[#E4D8CD]" />
              </div>

              {/* Google */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#DED1C5] bg-[#FBF6F0] px-5 py-3.5 text-sm font-semibold text-[#624432] transition-all duration-300 hover:border-[#C8B6A5] hover:bg-white"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold shadow-sm">
                  G
                </span>

                Continue with Google
              </button>

              {/* Login */}
              <p className="mt-6 text-center text-xs text-[#806E61]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-[#A96F46] hover:text-[#8D5838]"
                >
                  Sign in
                </Link>
              </p>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — AGENCY VISUAL
          ================================================= */}

          <div className="relative hidden h-[620px] items-center justify-center lg:flex">

            {/* Glow */}
            <div className="absolute h-[390px] w-[390px] rounded-full bg-[#B9794F]/10 blur-[110px]" />

            {/* Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[460px] w-[460px] rounded-full border border-[#B9794F]/10"
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#B9794F] shadow-[0_0_25px_rgba(185,121,79,0.45)]" />
            </motion.div>

            {/* Center */}
            <motion.div
              animate={{
                y: [-12, 12, -12],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 flex h-[310px] w-[310px] items-center justify-center rounded-[32%] border border-[#DCCFC2] bg-gradient-to-br from-[#FFF9F3] via-[#F5E9DD] to-[#E8D6C5] shadow-[0_40px_100px_rgba(111,78,55,0.15)]"
            >
              <div className="absolute inset-6 rounded-[30%] border border-[#C9956D]/20" />

              <div className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#C58C63] to-[#8D5838] text-white shadow-[0_15px_40px_rgba(141,88,56,0.2)]">
                  <Sparkles size={34} />
                </div>

                <p className="mt-7 text-2xl font-black text-[#352319]">
                  Build.
                  <span className="text-[#A96F46]"> Grow.</span>
                </p>

                <p className="mt-2 max-w-[190px] text-xs leading-5 text-[#806E61]">
                  Your digital journey starts here.
                </p>
              </div>
            </motion.div>

            {/* Feature Card 1 */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[3%] top-[17%] z-30 rounded-2xl border border-[#E0D2C5] bg-[#FFF9F3]/95 p-4 shadow-[0_20px_50px_rgba(111,78,55,0.12)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B9794F]/10 text-[#A96F46]">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-[#4A3021]">
                    Secure Platform
                  </p>

                  <p className="mt-1 text-[8px] text-[#806E61]">
                    Your data stays protected
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              animate={{
                y: [10, -10, 10],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[17%] right-[0%] z-30 rounded-2xl border border-[#E0D2C5] bg-[#FFF9F3]/95 p-4 shadow-[0_20px_50px_rgba(111,78,55,0.12)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B9794F]/10 text-[#A96F46]">
                  <Zap size={19} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-[#4A3021]">
                    Smart Solutions
                  </p>

                  <p className="mt-1 text-[8px] text-[#806E61]">
                    Built for modern businesses
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Small floating card */}
            <motion.div
              animate={{
                y: [-7, 7, -7],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[12%] top-[10%] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E0D2C5] bg-[#FFF9F3] text-[#A96F46] shadow-[0_15px_35px_rgba(111,78,55,0.12)]"
            >
              <Check size={20} />
            </motion.div>

            {/* Dots */}
            <div className="absolute bottom-[13%] left-[15%] h-3 w-3 rounded-full bg-[#C58C63]" />

            <div className="absolute right-[8%] top-[25%] h-2 w-2 rounded-full bg-[#B9794F]" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
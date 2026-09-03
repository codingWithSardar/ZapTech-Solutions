import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiLayers,
  FiZap,
  FiShield,
  FiCode,
  FiCpu,
  FiShoppingBag,
  FiSmartphone,
  FiGlobe,
  FiSend,
  FiCheck,
  FiLoader,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    contactPermission: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "#",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "#",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "#",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      href: "#",
    },
  ];

  const reasons = [
    {
      number: "01",
      icon: FiLayers,
      title: "Strategy First",
      description:
        "Every project starts with a clear strategy focused on your goals, audience and business direction.",
    },
    {
      number: "02",
      icon: FiZap,
      title: "Built To Scale",
      description:
        "We create flexible digital products that are ready to evolve as your business grows.",
    },
    {
      number: "03",
      icon: FiShield,
      title: "Quality Driven",
      description:
        "Clean architecture, responsive interfaces and attention to detail are part of every project.",
    },
  ];

  const services = [
    {
      icon: FiCode,
      title: "Web Development",
    },
    {
      icon: FiCpu,
      title: "AI Solutions",
    },
    {
      icon: FiShoppingBag,
      title: "E-Commerce",
    },
    {
      icon: FiGlobe,
      title: "SaaS Platforms",
    },
    {
      icon: FiSmartphone,
      title: "Mobile Apps",
    },
    {
      icon: FiLayers,
      title: "UI / UX Design",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const { data } = await axios.post("http://localhost:5000/api/client", formData);

      if (data.success) {
        setSuccess(
          data.message || "Project inquiry submitted successfully."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
          contactPermission: false,
        });
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f1e8] text-[#3d271a]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[180px] h-[380px] w-[380px] rounded-full bg-[#c58f62]/10 blur-[100px]" />
        <div className="absolute right-[-120px] top-[450px] h-[420px] w-[420px] rounded-full bg-[#d9b58e]/20 blur-[120px]" />
        <div className="absolute bottom-[300px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#b97845]/[0.06] blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(91,58,35,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,35,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <section className="relative z-10 px-6 pb-20 pt-36 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9b6946]/20 bg-[#fffaf4]/70 px-4 py-2 text-xs font-semibold text-[#8b5e3c] shadow-[0_8px_30px_rgba(111,72,42,0.05)] backdrop-blur-xl"
            >
              <HiSparkles size={14} />
              Let's Build Something Together
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl font-black leading-[0.96] tracking-[-0.055em] text-[#3b2518] sm:text-6xl lg:text-8xl"
            >
              Let's Create
              <span className="block bg-gradient-to-r from-[#9b6946] via-[#b87b4d] to-[#8a5636] bg-clip-text text-transparent">
                Something Remarkable.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#765f4e] sm:text-lg"
            >
              Have a bold idea or a business challenge? Tell us about
              your project and let's turn your vision into a powerful
              digital experience.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <motion.a
            href="mailto:zaphtech.solutions@gmail.com"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group rounded-[28px] border border-[#8b5e3c]/10 bg-[#fffaf4]/75 p-6 shadow-[0_15px_50px_rgba(111,72,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-[#9b6946]/25"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#b7835b]/20 bg-[#ead6c2]/40 text-[#8b5e3c]">
              <FiMail size={20} />
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a18772]">
              Email
            </p>

            <p className="mt-2 break-all text-sm font-semibold text-[#5c402d] transition-colors group-hover:text-[#9b6946]">
              zaphtech.solutions@gmail.com
            </p>

            <div className="mt-5 flex items-center gap-1 text-xs text-[#a18772] group-hover:text-[#8b5e3c]">
              Get in touch
              <FiArrowUpRight size={13} />
            </div>
          </motion.a>

          <motion.a
            href="tel:+923485006522"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="group rounded-[28px] border border-[#8b5e3c]/10 bg-[#fffaf4]/75 p-6 shadow-[0_15px_50px_rgba(111,72,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-[#9b6946]/25"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#b7835b]/20 bg-[#ead6c2]/40 text-[#8b5e3c]">
              <FiPhone size={20} />
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a18772]">
              Phone
            </p>

            <p className="mt-2 text-sm font-semibold leading-6 text-[#5c402d]">
              +92 348 5006522
              <br />
              +92 323 5304217
            </p>

            <div className="mt-5 flex items-center gap-1 text-xs text-[#a18772] group-hover:text-[#8b5e3c]">
              Call us
              <FiArrowUpRight size={13} />
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="rounded-[28px] border border-[#8b5e3c]/10 bg-[#fffaf4]/75 p-6 shadow-[0_15px_50px_rgba(111,72,42,0.06)] backdrop-blur-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#b7835b]/20 bg-[#ead6c2]/40 text-[#8b5e3c]">
              <FiMapPin size={20} />
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a18772]">
              Location
            </p>

            <p className="mt-2 text-sm font-semibold text-[#5c402d]">
              Islamabad, Pakistan
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-[#9b6946]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b97845] opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-[#9b6946]" />
              </span>
              Available for projects
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="project-form"
        className="relative z-10 px-6 pb-28 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b6946]"
            >
              Start A Project
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black tracking-tight text-[#3b2518] sm:text-5xl"
            >
              Tell Us About
              <span className="block bg-gradient-to-r from-[#9b6946] to-[#b87b4d] bg-clip-text text-transparent">
                Your Project.
              </span>
            </motion.h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#806b5a]">
              Share a few details about your idea, requirements and
              goals. Our team will review your project and get back
              to you.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-[#8b5e3c]/10 bg-[#fffaf4]/80 p-6 shadow-[0_25px_80px_rgba(111,72,42,0.08)] backdrop-blur-xl sm:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#6f513d]">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-[#8b5e3c]/15 bg-[#f9f1e7] px-4 py-3.5 text-sm text-[#4b3322] outline-none placeholder:text-[#ad9784] transition-all duration-300 focus:border-[#a86f48]/50 focus:bg-white focus:ring-4 focus:ring-[#b97845]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#6f513d]">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-[#8b5e3c]/15 bg-[#f9f1e7] px-4 py-3.5 text-sm text-[#4b3322] outline-none placeholder:text-[#ad9784] transition-all duration-300 focus:border-[#a86f48]/50 focus:bg-white focus:ring-4 focus:ring-[#b97845]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#6f513d]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    className="w-full rounded-xl border border-[#8b5e3c]/15 bg-[#f9f1e7] px-4 py-3.5 text-sm text-[#4b3322] outline-none placeholder:text-[#ad9784] transition-all duration-300 focus:border-[#a86f48]/50 focus:bg-white focus:ring-4 focus:ring-[#b97845]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#6f513d]">
                    Company / Business
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full rounded-xl border border-[#8b5e3c]/15 bg-[#f9f1e7] px-4 py-3.5 text-sm text-[#4b3322] outline-none placeholder:text-[#ad9784] transition-all duration-300 focus:border-[#a86f48]/50 focus:bg-white focus:ring-4 focus:ring-[#b97845]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#6f513d]">
                    Project Type *
                  </label>

                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-[#8b5e3c]/15 bg-[#f9f1e7] px-4 py-3.5 text-sm text-[#4b3322] outline-none transition-all duration-300 focus:border-[#a86f48]/50 focus:bg-white focus:ring-4 focus:ring-[#b97845]/10"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="Web Development">
                      Web Development
                    </option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="AI Solution">AI Solution</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="UI/UX Design">UI / UX Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#6f513d]">
                    Estimated Budget
                  </label>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-[#8b5e3c]/15 bg-[#f9f1e7] px-4 py-3.5 text-sm text-[#4b3322] outline-none transition-all duration-300 focus:border-[#a86f48]/50 focus:bg-white focus:ring-4 focus:ring-[#b97845]/10"
                  >
                    <option value="">Select your budget</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $2,500">
                      $1,000 - $2,500
                    </option>
                    <option value="$2,500 - $5,000">
                      $2,500 - $5,000
                    </option>
                    <option value="$5,000+">$5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#6f513d]">
                  Expected Timeline
                </label>

                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-xl border border-[#8b5e3c]/15 bg-[#f9f1e7] px-4 py-3.5 text-sm text-[#4b3322] outline-none transition-all duration-300 focus:border-[#a86f48]/50 focus:bg-white focus:ring-4 focus:ring-[#b97845]/10"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1 - 2 Weeks">1 - 2 Weeks</option>
                  <option value="2 - 4 Weeks">2 - 4 Weeks</option>
                  <option value="1 - 2 Months">1 - 2 Months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#6f513d]">
                  Project Requirements *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  placeholder="Tell us about your project, goals, required features, preferred technologies, references or anything else we should know..."
                  className="w-full resize-none rounded-xl border border-[#8b5e3c]/15 bg-[#f9f1e7] px-4 py-3.5 text-sm leading-6 text-[#4b3322] outline-none placeholder:text-[#ad9784] transition-all duration-300 focus:border-[#a86f48]/50 focus:bg-white focus:ring-4 focus:ring-[#b97845]/10"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#8b5e3c]/10 bg-[#f9f1e7]/70 p-4">
                <input
                  type="checkbox"
                  name="contactPermission"
                  checked={formData.contactPermission}
                  onChange={handleChange}
                  required
                  className="mt-0.5 h-4 w-4 accent-[#9b6946]"
                />

                <span className="text-xs leading-5 text-[#806b5a]">
                  I agree to be contacted by Zaphtech Solutions
                  regarding my project inquiry.
                </span>
              </label>

              {success && (
                <div className="rounded-xl border border-green-600/20 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  {success}
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-600/20 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              <div className="flex flex-col items-center justify-between gap-5 border-t border-[#8b5e3c]/10 pt-6 sm:flex-row">
                <div className="flex items-center gap-2 text-xs text-[#927d6a]">
                  <FiCheck size={15} className="text-[#9b6946]" />
                  We usually respond within 24 hours.
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#b97845] via-[#a96c43] to-[#8f5939] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_35px_rgba(143,89,57,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(143,89,57,0.28)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {loading ? (
                    <>
                      Sending
                      <FiLoader size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Project Inquiry
                      <FiSend
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b6946]"
            >
              Why Zaphtech
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black tracking-tight text-[#3b2518] sm:text-5xl"
            >
              Built Different.
              <span className="block bg-gradient-to-r from-[#9b6946] to-[#b87b4d] bg-clip-text text-transparent">
                Built For Growth.
              </span>
            </motion.h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[28px] border border-[#8b5e3c]/10 bg-[#fffaf4]/70 p-7 shadow-[0_15px_50px_rgba(111,72,42,0.05)] backdrop-blur-xl"
                >
                  <div className="absolute right-6 top-5 text-5xl font-black text-[#8b5e3c]/[0.05]">
                    {reason.number}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#b7835b]/20 bg-[#ead6c2]/40 text-[#8b5e3c] transition-all duration-300 group-hover:bg-[#ead6c2]/70">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#4b3020]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#806b5a]">
                    {reason.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#b97845] to-[#8f5939] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b6946]">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#3b2518] sm:text-5xl">
                Digital Solutions
                <span className="block text-[#9b806c]">
                  For Modern Brands.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#806b5a]">
                From websites to AI-powered platforms, we combine
                design, engineering and technology to build digital
                experiences that matter.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    whileHover={{ y: -5 }}
                    className="group rounded-2xl border border-[#8b5e3c]/10 bg-[#fffaf4]/70 p-5 shadow-[0_10px_35px_rgba(111,72,42,0.04)] transition-all duration-300 hover:border-[#a96c43]/25 hover:bg-[#ead6c2]/25"
                  >
                    <Icon
                      size={19}
                      className="text-[#9b6946] transition-transform duration-300 group-hover:scale-110"
                    />

                    <p className="mt-4 text-xs font-bold text-[#5c402d]">
                      {service.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-[#8b5e3c]/10 bg-gradient-to-r from-[#ead6c2]/50 via-[#f5e8da] to-[#ead6c2]/50 px-7 py-14 text-center shadow-[0_20px_70px_rgba(111,72,42,0.07)] sm:px-12 sm:py-16"
          >
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b97845]/60 to-transparent" />

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#b7835b]/20 bg-[#ead6c2]/60 text-[#9b6946]">
              <HiSparkles size={23} />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-black tracking-tight text-[#3b2518] sm:text-5xl">
              Ready To Build Something
              <span className="block bg-gradient-to-r from-[#9b6946] via-[#b87b4d] to-[#8f5939] bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#806b5a]">
              Let's turn your idea into a digital experience that
              people remember.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#project-form"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#b97845] to-[#8f5939] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_35px_rgba(143,89,57,0.2)] transition-all duration-300 hover:scale-[1.03]"
              >
                Start A Conversation
                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-[#8b5e3c]/15 bg-[#fffaf4]/70 px-6 py-3.5 text-sm font-semibold text-[#684a35] transition-all duration-300 hover:border-[#a96c43]/30 hover:bg-white"
              >
                Explore Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

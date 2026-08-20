import React from "react";
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
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const Contact = () => {
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

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030817] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(6,182,212,0.12),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.11),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(37,99,235,0.09),transparent_32%)]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]"
      />

      <section className="relative z-10 px-6 pb-24 pt-36 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-xl"
            >
              <HiSparkles size={14} />
              Let's Connect
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="text-5xl font-black leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
            >
              Let's Create
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Something Remarkable.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
            >
              Have a bold idea or a business challenge? We're always
              open to meaningful conversations and exciting digital
              projects.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <motion.a
            href="mailto:hello@zaptechsolutions.com"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300">
              <FiMail size={20} />
            </div>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
              Email
            </p>

            <p className="mt-2 text-sm font-medium text-slate-300 transition-colors group-hover:text-cyan-300">
              hello@zaptechsolutions.com
            </p>

            <div className="mt-5 flex items-center gap-1 text-xs text-slate-600 group-hover:text-slate-400">
              Get in touch
              <FiArrowUpRight size={13} />
            </div>
          </motion.a>

          <motion.a
            href="tel:+923001234567"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/10 bg-blue-400/[0.06] text-blue-300">
              <FiPhone size={20} />
            </div>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
              Phone
            </p>

            <p className="mt-2 text-sm font-medium text-slate-300 transition-colors group-hover:text-blue-300">
              +92 300 1234567
            </p>

            <div className="mt-5 flex items-center gap-1 text-xs text-slate-600 group-hover:text-slate-400">
              Call us
              <FiArrowUpRight size={13} />
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-400/[0.06] text-violet-300">
              <FiMapPin size={20} />
            </div>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
              Location
            </p>

            <p className="mt-2 text-sm font-medium text-slate-300">
              Islamabad, Pakistan
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Available worldwide
            </div>
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
              className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400"
            >
              Why Zaptech
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"
            >
              Built Different.
              <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
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
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
                >
                  <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.025]">
                    {reason.number}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.1]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {reason.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Digital Solutions
                <span className="block text-slate-500">
                  For Modern Brands.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
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
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
                  >
                    <Icon
                      size={19}
                      className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                    />

                    <p className="mt-4 text-xs font-semibold text-slate-300">
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
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-gradient-to-r from-cyan-400/[0.06] via-blue-500/[0.05] to-violet-500/[0.06] px-7 py-14 text-center sm:px-12 sm:py-16"
          >
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300">
              <HiSparkles size={23} />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
              Ready To Build Something
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Let's turn your idea into a digital experience that
              people remember.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@zaptechsolutions.com"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(37,99,235,0.18)] transition-all duration-300 hover:scale-[1.03]"
              >
                Start A Conversation

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
              >
                Explore Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.06] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-xs text-slate-600">
            © 2026 Zaptech Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-white/[0.04] hover:text-cyan-300"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
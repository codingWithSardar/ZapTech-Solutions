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
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Web Development",
    "AI & Automation",
    "UI/UX Design",
    "E-Commerce",
    "SaaS Development",
  ];

  const socials = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/sardar-abdullah-00a381388?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Shahzaib-Malik77",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/m.shahzaib2005?igsh=bnV1NHV5eWtjeTNx&igsi=bnV1NHV5eWtjeTNx",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/abid_sarda57174",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#020611]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_80%_100%,rgba(124,58,237,0.08),transparent_30%)]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-b border-white/[0.07] py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <a href="/" className="inline-flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-violet-500/10" />

                  <span className="relative text-lg font-black text-white">
                    Z
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-black tracking-tight text-white">
                    ZAPTECH
                  </h2>

                  <p className="text-[9px] font-medium tracking-[0.25em] text-cyan-300">
                    SOLUTIONS
                  </p>
                </div>
              </a>

              <p className="mt-6 max-w-sm text-sm leading-6 text-slate-500">
                We build modern digital experiences, powerful web
                applications and scalable software solutions that
                help ambitious businesses grow.
              </p>

              <a
                href="mailto:hello@zaptechsolutions.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
              >
                <FiMail size={16} />
               zaphtech.solutions@gmail.com
              </a>

              <div className="mt-7 flex items-center gap-2">
                {socials.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{
                        y: -4,
                        scale: 1.05,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-500 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                    >
                      <Icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Navigation
              </h3>

              <ul className="mt-6 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-cyan-300"
                    >
                      {item.name}

                      <FiArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Services
              </h3>

              <ul className="mt-6 space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm text-slate-500 transition-colors hover:text-slate-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Let's Talk
              </h3>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                Have an idea or project in mind? Let's discuss how
                we can bring it to life.
              </p>

              <a
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                Start a Project

                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <div className="mt-7 flex items-center gap-2 text-xs text-slate-600">
                <FiMapPin size={14} className="text-cyan-400/70" />
                Islamabad, Pakistan
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © {currentYear} Zaptech Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-600">
            <a
              href="#"
              className="transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-slate-300"
            >
              Terms & Conditions
            </a>
          </div>

          <p className="text-xs text-slate-600">
            Crafted with{" "}
            <span className="text-cyan-400">technology</span> &
            creativity.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </footer>
  );
};

export default Footer
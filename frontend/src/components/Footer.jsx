import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
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
    {
      icon: FaWhatsapp,
      href: "https://wa.me/923235304217",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/923485006522",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#F8F1E9]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(184,121,79,0.09),transparent_30%),radial-gradient(circle_at_80%_100%,rgba(154,96,64,0.08),transparent_30%)]" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(76,48,32,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(76,48,32,0.18) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-b border-[#7D5943]/10 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#B8794F]/20 bg-gradient-to-br from-[#B8794F]/10 via-[#A96D49]/10 to-[#C99772]/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B8794F]/10 to-[#C99772]/10" />

                  <span className="relative text-lg font-black text-[#4A3022]">
                    Z
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-black tracking-tight text-[#3B261A]">
                    ZAPHTECH
                  </h2>

                  <p className="text-[9px] font-medium tracking-[0.25em] text-[#9A6040]">
                    SOLUTIONS
                  </p>
                </div>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-6 text-[#806D5E]">
                We build modern digital experiences, powerful web
                applications and scalable software solutions that
                help ambitious businesses grow.
              </p>

              <a
                href="mailto:zaphtech.solutions@gmail.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#5F4030] transition-colors hover:text-[#9A6040]"
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
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -4,
                        scale: 1.05,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7D5943]/10 bg-white/40 text-[#907B6C] backdrop-blur-xl transition-all duration-300 hover:border-[#B8794F]/25 hover:bg-[#B8794F]/[0.07] hover:text-[#9A6040]"
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
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A3022]">
                Navigation
              </h3>

              <ul className="mt-6 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="group inline-flex items-center gap-1 text-sm text-[#806D5E] transition-colors hover:text-[#9A6040]"
                    >
                      {item.name}

                      <FiArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
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
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A3022]">
                Services
              </h3>

              <ul className="mt-6 space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm text-[#806D5E] transition-colors hover:text-[#5F4030]">
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
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A3022]">
                Let's Talk
              </h3>

              <p className="mt-6 text-sm leading-6 text-[#806D5E]">
                Have an idea or project in mind? Let's discuss how
                we can bring it to life.
              </p>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-[#B8794F]/20 bg-[#B8794F]/[0.07] px-5 py-3 text-sm font-semibold text-[#9A6040] transition-all duration-300 hover:border-[#B8794F]/40 hover:bg-[#B8794F]/10"
              >
                Start a Project

                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <div className="mt-7 flex items-center gap-2 text-xs text-[#907B6C]">
                <FiMapPin size={14} className="text-[#9A6040]" />
                Islamabad, Pakistan
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#907B6C]">
            © {currentYear} Zaphtech Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-[#907B6C]">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-[#5F4030]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-[#5F4030]"
            >
              Terms & Conditions
            </Link>
          </div>

          <p className="text-xs text-[#907B6C]">
            Crafted with{" "}
            <span className="text-[#9A6040]">technology</span> &
            creativity.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#B8794F]/40 to-transparent" />
    </footer>
  );
};

export default Footer;
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8"
    >
      <nav className="mx-auto max-w-7xl">
        <div className="relative">
          <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-r from-[#C58C63]/35 via-[#B9794F]/25 to-[#8D5838]/30 blur-[1px]" />

          <div className="relative flex h-[74px] items-center justify-between overflow-hidden rounded-[21px] border border-[#E0D2C5] bg-gradient-to-r from-[#FFF9F3]/95 via-[#F8EFE6]/95 to-[#F3E7DC]/95 px-5 shadow-[0_20px_70px_rgba(111,78,55,0.12)] backdrop-blur-2xl sm:px-6">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[#C58C63]/10 blur-[70px]" />

              <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#A96F46]/10 blur-[70px]" />

              <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B9794F]/35 to-transparent" />
            </div>

            <Link
              to="/"
              className="relative z-10 flex items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] border border-[#C58C63]/25 bg-gradient-to-br from-[#D8A982]/30 via-[#C58C63]/20 to-[#A96F46]/15] shadow-[0_0_30px_rgba(169,111,70,0.10)]"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-7 w-7 rounded-full border border-[#A96F46]/30"
                />

                <div className="absolute h-4 w-4 rounded-full bg-[#B9794F]/25 blur-md" />

                <span className="relative z-10 bg-gradient-to-br from-[#5A3827] via-[#A96F46] to-[#C58C63] bg-clip-text text-xl font-black text-transparent">
                  Z
                </span>
              </motion.div>

              <div className="hidden sm:block">
                <h1 className="text-[15px] font-bold tracking-tight text-[#3E281D]">
                  ZAPHTECH
                  <span className="text-[#A96F46]">.</span>
                </h1>

                <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.28em] text-[#806E61]">
                  Solutions
                </p>
              </div>
            </Link>

            <div className="relative z-10 hidden items-center gap-1 lg:flex">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                    duration: 0.5,
                  }}
                >
                  <Link
                    to={item.href}
                    className="group relative block rounded-xl px-5 py-3 text-[13px] font-medium text-[#806E61] transition-colors duration-300 hover:text-[#4A3021]"
                  >
                    <span className="relative z-10">
                      {item.name}
                    </span>

                    <span className="absolute inset-0 rounded-xl bg-[#B9794F]/0 transition-all duration-300 group-hover:bg-[#B9794F]/[0.06]" />

                    <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#C58C63] to-[#8D5838] shadow-[0_0_12px_rgba(169,111,70,0.35)] transition-all duration-300 group-hover:w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 35px rgba(169,111,70,0.20)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative z-10 hidden lg:flex"
            >
              <Link
                to="/contact"
                className="relative flex items-center gap-2 overflow-hidden rounded-xl border border-[#A96F46]/20 bg-gradient-to-r from-[#C58C63] via-[#B9794F] to-[#A96F46] px-5 py-3 text-[13px] font-bold text-white"
              >
                <span className="relative z-10">
                  Start a Project
                </span>

                <ArrowUpRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

                <motion.span
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-10 skew-x-[-20deg] bg-white/25 blur-sm"
                />
              </Link>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-[#DCCFC2] bg-[#F8EFE6]/80 text-[#684735] lg:hidden"
              aria-label="Toggle navigation"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                  >
                    <X size={21} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                  >
                    <Menu size={21} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                height: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                y: -15,
                height: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 overflow-hidden rounded-[20px] border border-[#E0D2C5] bg-gradient-to-br from-[#FFF9F3]/98 via-[#F8EFE6]/98 to-[#F3E7DC]/98 shadow-[0_25px_80px_rgba(111,78,55,0.15)] backdrop-blur-2xl lg:hidden"
            >
              <div className="relative space-y-1 p-3">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#C58C63]/10 blur-3xl" />

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-[#806E61] transition-all hover:bg-[#B9794F]/[0.06] hover:text-[#A96F46]"
                    >
                      <span>{item.name}</span>

                      <ArrowUpRight
                        size={15}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </motion.div>
                ))}

                <div className="my-2 h-px bg-[#DCCFC2]" />

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C58C63] via-[#B9794F] to-[#A96F46] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(169,111,70,0.15)]"
                >
                  Start a Project
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
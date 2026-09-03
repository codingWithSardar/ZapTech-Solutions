import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  BrainCircuit,
  Zap,
  Globe2,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F1E8] pt-32 sm:pt-32 lg:pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(190,137,91,0.10),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(211,166,121,0.10),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(166,112,73,0.08),transparent_30%)]" />

      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(126,82,50,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(126,82,50,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      {/* Ambient blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [0, -30, 0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-[28%] h-40 w-40 rounded-full bg-[#B9794F]/10 blur-[90px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0, 50, 0],
          y: [0, 40, 0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] top-[18%] h-52 w-52 rounded-full bg-[#C9956D]/10 blur-[100px]"
      />

      {/* MAIN HERO */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-10 sm:gap-16 sm:px-6 sm:pb-24 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        {/* LEFT */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A96F46]/20 bg-[#B9794F]/[0.06] px-4 py-2 text-xs font-medium text-[#805235] backdrop-blur-xl sm:mb-7"
          >
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#A96F46] shadow-[0_0_10px_rgba(169,111,70,0.5)]"
            />

            <Sparkles size={14} />

            <span>Building Digital Experiences That Matter</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#352319] sm:text-6xl md:text-7xl lg:text-[78px]"
          >
            We Build
            <span className="block bg-gradient-to-r from-[#B9794F] via-[#A96F46] to-[#8D5838] bg-clip-text text-transparent">
              Digital Futures.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="mt-6 max-w-2xl text-sm leading-6 text-[#6E5A4B] sm:mt-7 sm:text-lg sm:leading-7"
          >
            Zaphtech Solutions transforms ambitious ideas into powerful digital
            products through modern web development, AI, scalable technology
            and exceptional design.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <Link to="/contact">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 45px rgba(169,111,70,0.22)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C58C63] via-[#B9794F] to-[#A96F46] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(141,88,56,0.15)]"
              >
                Start a Project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.div>
            </Link>

            <Link to="/projects">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(169,111,70,0.06)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-2 rounded-xl border border-[#DCCFC2] bg-[#FBF6F0] px-6 py-3.5 text-sm font-semibold text-[#624432] backdrop-blur-xl transition-colors"
              >
                Explore Our Work

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-12 sm:gap-x-8"
          >
            <div>
              <p className="text-2xl font-bold text-[#352319]">30+</p>
              <p className="mt-1 text-xs text-[#806E61]">
                Projects Delivered
              </p>
            </div>

            <div className="h-10 w-px bg-[#DDD0C4]" />

            <div>
              <p className="text-2xl font-bold text-[#352319]">20+</p>
              <p className="mt-1 text-xs text-[#806E61]">Happy Clients</p>
            </div>

            <div className="h-10 w-px bg-[#DDD0C4]" />

            <div>
              <p className="text-2xl font-bold text-[#352319]">2+</p>
              <p className="mt-1 text-xs text-[#806E61]">Years Experience</p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            NEW RIGHT SIDE — DIGITAL AGENCY DASHBOARD
        ====================================================== */}

        <div className="relative mx-auto flex h-[430px] w-full max-w-[540px] items-center justify-center sm:h-[530px] lg:h-[610px]">
          {/* Large soft glow */}
          <div className="absolute h-[320px] w-[320px] rounded-full bg-[#B9794F]/10 blur-[100px]" />

          {/* Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[430px] w-[430px] rounded-full border border-[#B9794F]/10"
          >
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#B9794F] shadow-[0_0_20px_rgba(185,121,79,0.5)]" />
          </motion.div>

          {/* MAIN PRODUCT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -8,
              rotateX: 2,
              rotateY: -2,
            }}
            className="relative z-20 w-[330px] overflow-hidden rounded-[28px] border border-[#DCCFC2] bg-[#FFF9F3]/90 p-4 shadow-[0_35px_100px_rgba(111,78,55,0.16)] backdrop-blur-2xl sm:w-[390px]"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Browser top */}
            <div className="flex items-center justify-between border-b border-[#E6D9CC] pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D8B9A0]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#C9956D]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#A96F46]" />
              </div>

              <div className="rounded-full bg-[#F2E8DE] px-3 py-1 text-[8px] font-medium text-[#806E61]">
                zaphtech.solutions
              </div>

              <div className="h-5 w-5 rounded-full bg-[#F1E5D9]" />
            </div>

            {/* Dashboard */}
            <div className="mt-4 rounded-2xl bg-[#F6EEE5] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A8170]">
                    Digital Growth
                  </p>

                  <p className="mt-1 text-xl font-black text-[#352319]">
                    84.6%
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B9794F]/10 text-[#A96F46]">
                  <Zap size={16} />
                </div>
              </div>

              {/* Graph */}
              <div className="relative mt-6 h-28 overflow-hidden rounded-xl border border-[#E6D9CC] bg-[#FFF9F3]">
                <div className="absolute inset-x-3 bottom-3 top-3">
                  <svg
                    viewBox="0 0 300 100"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 82 C25 70, 35 78, 55 62 C75 46, 82 58, 105 48 C125 38, 135 53, 155 35 C178 15, 188 34, 210 28 C235 20, 245 30, 265 12 C280 3, 290 10, 300 5"
                      fill="none"
                      stroke="#B9794F"
                      strokeWidth="3"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[7px] text-[#B09C8C]">
                  <span>JAN</span>
                  <span>MAR</span>
                  <span>MAY</span>
                  <span>JUL</span>
                  <span>SEP</span>
                  <span>DEC</span>
                </div>
              </div>

              {/* Mini stats */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-white/70 p-3">
                  <p className="text-[8px] text-[#9A8170]">Projects</p>
                  <p className="mt-1 text-sm font-bold text-[#352319]">
                    30+
                  </p>
                </div>

                <div className="rounded-xl bg-white/70 p-3">
                  <p className="text-[8px] text-[#9A8170]">Clients</p>
                  <p className="mt-1 text-sm font-bold text-[#352319]">
                    20+
                  </p>
                </div>

                <div className="rounded-xl bg-white/70 p-3">
                  <p className="text-[8px] text-[#9A8170]">Growth</p>
                  <p className="mt-1 text-sm font-bold text-[#A96F46]">
                    +42%
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-[9px] text-[#9A8170]">
                  Current Status
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#9A765B]" />
                  <span className="text-[10px] font-semibold text-[#4A3021]">
                    Building something great
                  </span>
                </div>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B9794F] text-white">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.div>

          {/* FLOATING AI CARD */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[17%] z-30 rounded-2xl border border-[#E0D2C5] bg-[#FFF9F3]/95 px-4 py-3 shadow-[0_20px_50px_rgba(111,78,55,0.12)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B9794F]/10 text-[#A96F46]">
                <BrainCircuit size={17} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-[#4A3021]">
                  AI Solutions
                </p>

                <p className="mt-0.5 text-[8px] text-[#806E61]">
                  Intelligent products
                </p>
              </div>
            </div>
          </motion.div>

          {/* FLOATING WEB CARD */}
          <motion.div
            animate={{
              y: [8, -8, 8],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[15%] right-[-2%] z-30 rounded-2xl border border-[#E0D2C5] bg-[#FFF9F3]/95 px-4 py-3 shadow-[0_20px_50px_rgba(111,78,55,0.12)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B9794F]/10 text-[#A96F46]">
                <Code2 size={17} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-[#4A3021]">
                  Modern Web
                </p>

                <div className="mt-1 flex items-center gap-1">
                  <Check size={10} className="text-[#A96F46]" />
                  <span className="text-[8px] text-[#806E61]">
                    Built to scale
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SMALL FLOATING GLOBE */}
          <motion.div
            animate={{
              y: [-7, 7, -7],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[8%] top-[8%] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E0D2C5] bg-[#FFF9F3]/90 text-[#A96F46] shadow-[0_15px_40px_rgba(111,78,55,0.1)]"
          >
            <Globe2 size={19} />
          </motion.div>

          {/* SMALL DOTS */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[14%] top-[22%] h-3 w-3 rounded-full bg-[#C58C63] shadow-[0_0_25px_rgba(169,111,70,0.5)]"
          />

          <motion.div
            animate={{
              y: [8, -8, 8],
              x: [0, -8, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[10%] left-[15%] h-2 w-2 rounded-full bg-[#B9794F] shadow-[0_0_20px_rgba(169,111,70,0.45)]"
          />
        </div>
      </div>

      {/* =====================================================
          AGENCY CAPABILITIES STRIP
      ====================================================== */}

      <section className="relative z-20 border-y border-[#DDD0C4] bg-[#FBF6F0]/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
          {[
            {
              icon: Code2,
              title: "Web Development",
              text: "Fast & scalable",
            },
            {
              icon: BrainCircuit,
              title: "AI Solutions",
              text: "Smart & intelligent",
            },
            {
              icon: Zap,
              title: "Digital Products",
              text: "Built for growth",
            },
            {
              icon: Globe2,
              title: "Global Reach",
              text: "Ready to scale",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`flex items-center gap-3 px-5 py-6 sm:px-7 ${
                  index !== 0 ? "border-l border-[#DDD0C4]" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B9794F]/10 text-[#A96F46]">
                  <Icon size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-[#4A3021] sm:text-xs">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[8px] text-[#806E61] sm:text-[9px]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 mx-auto flex flex-col items-center gap-2 py-8 text-[#806E61]"
      >
        <span className="text-[9px] uppercase tracking-[0.35em]">
          Scroll to explore
        </span>

        <div className="h-8 w-px bg-gradient-to-b from-[#B9794F]/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#030817] pt-32 sm:pt-32 lg:pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.16),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(124,58,237,0.12),transparent_30%)]" />

      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

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
        className="absolute left-[8%] top-[28%] h-40 w-40 rounded-full bg-cyan-400/10 blur-[90px]"
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
        className="absolute right-[8%] top-[18%] h-52 w-52 rounded-full bg-violet-500/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-16 pt-10 sm:gap-16 sm:px-6 sm:pb-20 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-xl sm:mb-7"
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
              className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
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
            className="text-4xl font-black leading-[1] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[78px]"
          >
            We Build
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
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
            className="mt-6 max-w-2xl text-sm leading-6 text-slate-400 sm:mt-7 sm:text-lg sm:leading-7"
          >
            Zaphtech Solutions transforms ambitious ideas into powerful digital
            products through modern web development, AI, scalable technology and
            exceptional design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <Link to={"/contact"}>
              <motion.a
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 45px rgba(34,211,238,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 px-6 py-3.5 text-sm font-bold text-[#04101c]"
              >
                Start a Project
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </Link>

           
              <Link to={"/projects"}>
               <motion.a
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.07)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-colors"
            >
              
              Explore Our Work
               <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
              </Link>

             
          </motion.div>

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
              <p className="text-2xl font-bold text-white">30+</p>
              <p className="mt-1 text-xs text-slate-500">Projects Delivered</p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="mt-1 text-xs text-slate-500">Happy Clients</p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold text-white">2+</p>
              <p className="mt-1 text-xs text-slate-500">Years Experience</p>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto flex h-[400px] w-full max-w-[520px] items-center justify-center sm:h-[480px] lg:h-[600px]">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[270px] w-[270px] rounded-full border border-cyan-400/10 sm:h-[400px] sm:w-[400px]"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />
          </motion.div>

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[350px] w-[350px] rounded-full border border-violet-400/10 sm:h-[510px] sm:w-[510px]"
          >
            <span className="absolute bottom-[8%] left-[8%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,1)]" />
          </motion.div>

          <motion.div
            animate={{
              y: [-15, 15, -15],
              rotateX: [0, 5, 0],
              rotateY: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="relative h-[230px] w-[230px] sm:h-[340px] sm:w-[340px]"
          >
            <div className="absolute inset-0 rounded-[35%] bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-violet-600/30 blur-[60px]" />

            <div className="absolute inset-[8%] rotate-12 rounded-[35%] border border-white/10 bg-gradient-to-br from-white/[0.08] via-blue-500/[0.05] to-violet-500/[0.08] shadow-[inset_0_0_60px_rgba(255,255,255,0.03),0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl" />

            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[22%] rounded-[30%] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5"
            />

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[35%] rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-500 opacity-80 blur-[2px] shadow-[0_0_80px_rgba(34,211,238,0.5)]"
            />

            <div className="absolute left-[16%] top-[15%] h-20 w-20 rounded-full bg-cyan-300/10 blur-2xl" />

            <div className="absolute bottom-[12%] right-[12%] h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
          </motion.div>

          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[3%] top-[17%] rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d3c]/90 to-[#11152e]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="mb-2 h-2 w-16 rounded-full bg-white/10" />

            <div className="h-2 w-10 rounded-full bg-cyan-400/60" />
          </motion.div>

          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[15%] right-[2%] flex items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d3c]/90 to-[#11152e]/80 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10">
              <Sparkles size={15} className="text-cyan-300" />
            </div>

            <div>
              <p className="text-[11px] font-semibold text-white">
                Smart Solutions
              </p>

              <p className="text-[9px] text-slate-500">Built for the future</p>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [-8, 8, -8],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[12%] top-[10%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.9)]"
          />

          <motion.div
            animate={{
              y: [8, -8, 8],
              x: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[10%] left-[18%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.9)]"
          />
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.35em]">
          Scroll to explore
        </span>

        <div className="h-8 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

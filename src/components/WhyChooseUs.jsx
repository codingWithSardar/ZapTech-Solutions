import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Gauge,
  ShieldCheck,
  UsersRound,
  Zap,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Modern Technology",
    description:
      "We use modern frameworks, scalable architecture and powerful tools to build products ready for the future.",
    icon: BrainCircuit,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    title: "Performance First",
    description:
      "Fast load times, smooth interactions and optimized experiences across devices are built into every project.",
    icon: Gauge,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    number: "03",
    title: "Built To Scale",
    description:
      "Our solutions are engineered with scalability in mind, allowing your digital product to grow with your business.",
    icon: Zap,
    gradient: "from-violet-400 to-fuchsia-500",
  },
  {
    number: "04",
    title: "Reliable & Secure",
    description:
      "Security, clean architecture and reliable development practices help keep your product protected and dependable.",
    icon: ShieldCheck,
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    number: "05",
    title: "Client Focused",
    description:
      "We work closely with our clients to understand their goals and turn ideas into meaningful digital experiences.",
    icon: UsersRound,
    gradient: "from-indigo-400 to-violet-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#030817] py-28 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(6,182,212,0.08),transparent_28%),radial-gradient(circle_at_90%_50%,rgba(124,58,237,0.08),transparent_28%)]" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-xl"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
              Why Zaphtech
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              More Than
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Just Development.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-6 max-w-lg text-base leading-7 text-slate-400 sm:text-lg"
            >
              We combine technology, creativity and strategy to
              create digital products that solve real problems and
              deliver measurable business value.
            </motion.p>

            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 35px rgba(34,211,238,0.18)",
              }}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-xl"
            >
              Work With Us

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <div className="mt-12 grid max-w-lg grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl"
              >
                <p className="text-3xl font-black text-white">
                  100%
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Client Satisfaction
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl"
              >
                <p className="text-3xl font-black text-white">
                  30+
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Projects Delivered
                </p>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-3xl" />

            <div className="relative space-y-3">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.number}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      x: -6,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-r from-white/[0.045] to-white/[0.015] p-5 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.14]"
                  >
                    <div
                      className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${reason.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
                    />

                    <div className="relative flex items-center gap-5">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04]">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-10 transition-opacity group-hover:opacity-20`}
                        />

                        <Icon
                          size={23}
                          strokeWidth={1.7}
                          className="relative text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400/60">
                            {reason.number}
                          </span>

                          <h3 className="text-base font-bold text-white sm:text-lg">
                            {reason.title}
                          </h3>
                        </div>

                        <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
                          {reason.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                      />
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${reason.gradient} transition-all duration-700 group-hover:w-full`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
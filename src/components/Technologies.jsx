import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  FileCode2,
  Layers3,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

const technologies = [
  {
    name: "HTML",
    category: "Frontend",
    icon: Code2,
    gradient: "from-orange-400 to-red-500",
  },
  {
    name: "CSS",
    category: "Styling",
    icon: FileCode2,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: Braces,
    gradient: "from-yellow-300 to-orange-400",
  },
  {
    name: "React",
    category: "Frontend",
    icon: Code2,
    gradient: "from-cyan-300 to-blue-500",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: Layers3,
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: Terminal,
    gradient: "from-white to-slate-400",
  },
  {
    name: "TypeScript",
    category: "Programming",
    icon: FileCode2,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: Server,
    gradient: "from-slate-300 to-slate-500",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: Database,
    gradient: "from-green-300 to-green-600",
  },
  {
    name: "Python",
    category: "Programming",
    icon: FileCode2,
    gradient: "from-yellow-300 to-blue-500",
  },
  {
    name: "Flutter",
    category: "Mobile Development",
    icon: Smartphone,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "Dart",
    category: "Programming",
    icon: Code2,
    gradient: "from-cyan-400 to-blue-600",
  },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-[#030817] py-28 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_10%_70%,rgba(6,182,212,0.07),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(124,58,237,0.08),transparent_28%)]" />

      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            Our Technology Stack
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            Built With
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Modern Technology.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            We use modern and reliable technologies to build fast,
            scalable web, mobile and software solutions.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.div
                key={technology.name}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-1 rounded-[22px] bg-gradient-to-br ${technology.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-15`}
                />

                <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-5 backdrop-blur-xl transition-all duration-500 group-hover:border-white/[0.16]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/[0.025] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.06]" />

                  <div className="relative flex items-center justify-between">
                    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04]">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${technology.gradient} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
                      />

                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        className="relative text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      />
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                    />
                  </div>

                  <h3 className="relative mt-5 text-base font-bold text-white">
                    {technology.name}
                  </h3>

                  <p className="relative mt-1 text-xs text-slate-500">
                    {technology.category}
                  </p>

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${technology.gradient} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-slate-500">
            The right technology. The right architecture. The right
            solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
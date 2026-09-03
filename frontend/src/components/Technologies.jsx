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
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const iconMap = {
  HTML: Code2,
  CSS: FileCode2,
  JavaScript: Braces,
  React: Code2,
  "Tailwind CSS": Layers3,
  Tailwind: Layers3,
  "Next.js": Terminal,
  TypeScript: FileCode2,
  "Node.js": Server,
  "Express.js": Server,
  MongoDB: Database,
  Python: FileCode2,
  Flutter: Smartphone,
  Dart: Code2,
};

const gradients = [
  "from-[#C98255] to-[#A85D3D]",
  "from-[#B8794F] to-[#8F583B]",
  "from-[#C99772] to-[#A96D49]",
  "from-[#B8794F] to-[#9A6040]",
  "from-[#C08A67] to-[#9A6040]",
  "from-[#6E4935] to-[#A8795C]",
  "from-[#A96D49] to-[#7D5039]",
  "from-[#9A6040] to-[#6F4A37]",
];

const Technologies = () => {
  const { technologies, technologiesLoading, technologiesError } =
    useContext(UserContext);

  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-[#F8F1E9] py-28 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(184,121,79,0.11),transparent_35%),radial-gradient(circle_at_10%_70%,rgba(211,170,132,0.08),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(139,91,58,0.07),transparent_28%)]" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(76,48,32,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(76,48,32,0.18) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.22, 0.4, 0.22],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#B8794F]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8794F]/20 bg-[#B8794F]/[0.07] px-4 py-2 text-xs font-medium text-[#805336] backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8794F] shadow-[0_0_10px_rgba(184,121,79,0.7)]" />
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
            className="text-4xl font-black tracking-[-0.04em] text-[#3B261A] sm:text-5xl lg:text-6xl"
          >
            Built With
            <span className="block bg-gradient-to-r from-[#9A6040] via-[#B8794F] to-[#C99772] bg-clip-text text-transparent">
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
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#806D5E] sm:text-lg"
          >
            We use modern and reliable technologies to build fast, scalable web,
            mobile and software solutions.
          </motion.p>
        </div>

        {technologiesLoading ? (
          <div className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-36 animate-pulse rounded-[22px] border border-[#7D5943]/10 bg-white/60"
              />
            ))}
          </div>
        ) : technologiesError ? (
          <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-600">
            {technologiesError}
          </div>
        ) : technologies.length === 0 ? (
          <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-[#7D5943]/10 bg-white/60 p-8 text-center text-sm text-[#806D5E]">
            No technologies available.
          </div>
        ) : (
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
              const Icon = iconMap[technology.name] || Code2;

              const gradient =
                technology.gradient || gradients[index % gradients.length];

              return (
                <motion.div
                  key={technology._id || technology.id || technology.name}
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
                    className={`absolute -inset-1 rounded-[22px] bg-gradient-to-br ${gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-15`}
                  />

                  <div className="relative overflow-hidden rounded-[22px] border border-[#7D5943]/10 bg-gradient-to-br from-white/70 to-[#F1E3D6]/60 p-5 shadow-[0_12px_40px_rgba(92,59,39,0.05)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#B8794F]/25 group-hover:shadow-[0_20px_55px_rgba(92,59,39,0.12)]">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#B8794F]/[0.035] blur-3xl transition-all duration-500 group-hover:bg-[#B8794F]/[0.09]" />

                    <div className="relative flex items-center justify-between">
                      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#7D5943]/10 bg-[#F3E5D7]">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
                        />

                        <Icon
                          size={22}
                          strokeWidth={1.7}
                          className="relative text-[#8F583B] transition-all duration-300 group-hover:scale-110 group-hover:text-[#6E4935]"
                        />
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="text-[#B8A294] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9A6040]"
                      />
                    </div>

                    <h3 className="relative mt-5 text-base font-bold text-[#3B261A]">
                      {technology.name}
                    </h3>

                    <p className="relative mt-1 text-xs text-[#907B6C]">
                      {technology.category}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:w-full`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

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
          <p className="text-sm text-[#907B6C]">
            The right technology. The right architecture. The right solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

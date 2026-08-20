import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  CheckCircle2,
  Code2,
  Headphones,
  Lightbulb,
  Rocket,
  Search,
  TestTube2,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, audience, goals and challenges to define exactly what needs to be built.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create a clear technical and product strategy with the right roadmap, features and technology stack.",
    icon: Brain,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "We transform ideas into intuitive interfaces and high-quality experiences designed around your users.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our developers turn the approved designs into fast, scalable and production-ready digital products.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Every important feature is tested for performance, responsiveness, usability and reliability before launch.",
    icon: TestTube2,
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy your product, configure the required infrastructure and make sure everything is ready for users.",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Support",
    description:
      "Our relationship continues after launch with maintenance, improvements and ongoing technical support.",
    icon: Headphones,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const OurProcess = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#030817] py-28 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(37,99,235,0.10),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(6,182,212,0.07),transparent_30%),radial-gradient(circle_at_90%_70%,rgba(124,58,237,0.07),transparent_30%)]" />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[20%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]"
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
            Our Process
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
            From Idea To
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Digital Reality.
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
            A clear and collaborative process designed to turn
            ambitious ideas into powerful digital products.
          </motion.p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-[28px] top-8 bottom-8 w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/30 to-violet-500/20 md:left-1/2 md:-translate-x-1/2" />

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="absolute left-[28px] top-8 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 md:left-1/2 md:-translate-x-1/2"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="space-y-6"
          >
            {process.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={item}
                  className={`relative flex items-center md:${
                    isEven ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="absolute left-0 z-20 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-cyan-400/20 bg-[#07152e] shadow-[0_0_30px_rgba(34,211,238,0.12)] md:left-1/2 md:-translate-x-1/2">
                    <div className="absolute inset-2 rounded-full border border-white/[0.06]" />

                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="relative text-cyan-300"
                    />
                  </div>

                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.015,
                    }}
                    className={`ml-[82px] w-[calc(100%-82px)] md:ml-0 md:w-[43%] ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20 hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
                      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.05] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.1]" />

                      <div className="relative flex items-center justify-between">
                        <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-xs font-bold tracking-[0.2em] text-transparent">
                          STEP {step.number}
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                        />
                      </div>

                      <h3 className="relative mt-4 text-xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="relative mt-3 text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>

                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-700 group-hover:w-full" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-20 flex max-w-3xl items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-5 text-center backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2
              size={20}
              className="shrink-0 text-cyan-300"
            />

            <p className="text-sm text-slate-400">
              Transparent process.
              <span className="ml-1 font-medium text-white">
                No surprises. No unnecessary complexity.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "30+",
    label: "Projects Delivered",
  },
  {
    value: "20+",
    label: "Happy Clients",
  },
  {
    value: "2+",
    label: "Years Experience",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Engineering Excellence",
    text: "We build reliable, scalable and high-performance digital products using modern technologies and clean architecture.",
  },
  {
    icon: Layers3,
    title: "Design Meets Technology",
    text: "We combine premium UI/UX design with powerful engineering to create experiences that look exceptional and perform flawlessly.",
  },
  {
    icon: BrainCircuit,
    title: "Smart Digital Solutions",
    text: "From automation to intelligent applications, we use modern technologies to solve real business problems.",
  },
  {
    icon: Rocket,
    title: "Built For Growth",
    text: "Our solutions are designed with scalability in mind so your product can grow alongside your business.",
  },
];

const About = () => {
  return (
    <main className="relative overflow-hidden bg-[#F8F1E9] text-[#3B261A]">
      <section className="relative min-h-[85vh] overflow-hidden px-6 pb-24 pt-36 sm:pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(184,121,79,0.12),transparent_30%),radial-gradient(circle_at_10%_70%,rgba(211,170,132,0.09),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(154,96,64,0.08),transparent_30%)]" />

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
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B8794F]/[0.08]"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-[45%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9A6040]/[0.06]"
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B8794F]/20 bg-[#B8794F]/[0.07] px-4 py-2 text-xs font-medium text-[#9A6040] backdrop-blur-xl"
          >
            <Sparkles size={14} />
            About Zaphtech Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] text-[#3B261A] sm:text-6xl lg:text-8xl"
          >
            We Build Digital
            <span className="block bg-gradient-to-r from-[#9A6040] via-[#B8794F] to-[#C99772] bg-clip-text text-transparent">
              Experiences That Matter.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mt-8 max-w-2xl text-base leading-7 text-[#806D5E] sm:text-lg"
          >
            Zaphtech Solutions is a technology-driven digital agency
            focused on transforming ambitious ideas into powerful,
            scalable and beautifully crafted digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="/projects"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#A96D49] via-[#B8794F] to-[#C08A67] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(139,91,58,0.18)] transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore Our Work

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#7D5943]/15 bg-white/45 px-6 py-3.5 text-sm font-semibold text-[#5F4030] backdrop-blur-xl transition-all duration-300 hover:border-[#B8794F]/30 hover:bg-[#B8794F]/[0.07]"
            >
              Start A Conversation
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A6040]">
                Who We Are
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#3B261A] sm:text-5xl">
                Technology With
                <span className="block bg-gradient-to-r from-[#9A6040] to-[#B8794F] bg-clip-text text-transparent">
                  Purpose.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="space-y-5 text-base leading-7 text-[#806D5E]"
            >
              <p>
                At Zaphtech Solutions, we believe technology should
                do more than simply work. It should create meaningful
                experiences, solve complex problems and open new
                opportunities for businesses.
              </p>

              <p>
                Our team brings together development, design and
                technology to create modern digital products that
                are fast, intuitive and built to scale.
              </p>

              <p>
                Whether it's a startup idea, an e-commerce platform,
                SaaS product or a custom business solution, we turn
                concepts into digital experiences people remember.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[28px] border border-[#B8794F]/10 bg-gradient-to-br from-[#B8794F]/[0.08] to-white/[0.35] p-8 backdrop-blur-xl sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#B8794F]/[0.09] blur-[70px]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#B8794F]/20 bg-[#B8794F]/[0.08]">
                <Target size={21} className="text-[#9A6040]" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#3B261A]">
                Our Mission
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#806D5E]">
                To empower businesses with innovative technology
                and digital experiences that create measurable
                impact and long-term value.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-[#9A6040]/10 bg-gradient-to-br from-[#9A6040]/[0.07] to-white/[0.35] p-8 backdrop-blur-xl sm:p-10"
          >
            <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#9A6040]/[0.08] blur-[70px]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#9A6040]/20 bg-[#9A6040]/[0.07]">
                <Sparkles size={21} className="text-[#9A6040]" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#3B261A]">
                Our Vision
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#806D5E]">
                To become a trusted technology partner for
                forward-thinking businesses and shape the future
                of digital innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-[#7D5943]/10 bg-white/[0.22] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <p className="text-4xl font-black tracking-tight text-[#3B261A] sm:text-5xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-[#907B6C] sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A6040]"
            >
              Why Zaphtech
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#3B261A] sm:text-5xl"
            >
              More Than A
              <span className="block bg-gradient-to-r from-[#9A6040] via-[#B8794F] to-[#C99772] bg-clip-text text-transparent">
                Development Agency.
              </span>
            </motion.h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[24px] border border-[#7D5943]/10 bg-gradient-to-br from-white/[0.55] to-white/[0.25] p-7 backdrop-blur-xl transition-colors duration-500 hover:border-[#B8794F]/20"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#B8794F]/[0.04] blur-3xl transition-all duration-500 group-hover:bg-[#B8794F]/[0.08]" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7D5943]/10 bg-[#B8794F]/[0.05]">
                      <Icon
                        size={21}
                        className="text-[#9A6040]"
                      />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#3B261A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#806D5E]">
                      {item.text}
                    </p>

                    <ArrowRight
                      size={17}
                      className="mt-6 text-[#B8A294] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#9A6040]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-[#B8794F]/10 bg-gradient-to-r from-[#B8794F]/[0.07] via-[#C99772]/[0.05] to-[#9A6040]/[0.06] px-7 py-12 text-center sm:px-12 sm:py-16"
        >
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B8794F]/60 to-transparent" />

          <Users
            size={28}
            className="mx-auto text-[#9A6040]"
          />

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#3B261A] sm:text-4xl">
            Ready To Build Something
            <span className="block bg-gradient-to-r from-[#9A6040] to-[#C08A67] bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#806D5E]">
            Let's turn your idea into a digital product that makes
            an impact.
          </p>

          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#A96D49] via-[#B8794F] to-[#C08A67] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(139,91,58,0.15)] transition-transform duration-300 hover:scale-[1.03]"
          >
            Start Your Project

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
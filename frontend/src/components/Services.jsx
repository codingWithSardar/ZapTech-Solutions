import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Layers3,
  Palette,
  ShoppingBag,
  Sparkles,
  Smartphone
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern technologies, scalable architecture and exceptional user experiences.",
    icon: Code2,
    gradient: "from-[#C58C63] to-[#8D5838]",
    glow: "bg-[#B9794F]/10",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Cross-platform mobile applications built with Flutter and Dart, delivering smooth performance, beautiful interfaces and consistent experiences across devices.",
    icon: Smartphone,
    gradient: "from-[#C58C63] to-[#8D5838]",
    glow: "bg-[#B9794F]/10",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Intelligent AI-powered solutions that automate workflows, improve productivity and create smarter digital experiences.",
    icon: Bot,
    gradient: "from-[#B9794F] to-[#A96F46]",
    glow: "bg-[#B9794F]/10",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive and conversion-focused interfaces designed to turn complex ideas into effortless digital experiences.",
    icon: Palette,
    gradient: "from-[#A96F46] to-[#8D5838]",
    glow: "bg-[#A96F46]/10",
  },
  {
    number: "05",
    title: "E-Commerce",
    description:
      "Modern and scalable e-commerce platforms designed to deliver seamless shopping experiences and drive business growth.",
    icon: ShoppingBag,
    gradient: "from-[#C58C63] to-[#A96F46]",
    glow: "bg-[#B9794F]/10",
  },
  {
    number: "06",
    title: "SaaS Development",
    description:
      "End-to-end SaaS products with secure architecture, powerful dashboards, subscriptions and scalable cloud infrastructure.",
    icon: Layers3,
    gradient: "from-[#B9794F] to-[#8D5838]",
    glow: "bg-[#A96F46]/10",
  },
  {
    number: "07",
    title: "Custom Software",
    description:
      "Tailored software solutions engineered around your unique business requirements, workflows and long-term goals.",
    icon: Sparkles,
    gradient: "from-[#A96F46] to-[#8D5838]",
    glow: "bg-[#B9794F]/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8F1E8] py-28 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(185,121,79,0.08),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(169,111,70,0.08),transparent_30%)]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(126,82,50,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(126,82,50,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
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
        className="absolute left-[-100px] top-[20%] h-72 w-72 rounded-full bg-[#B9794F]/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 30, 0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-100px] bottom-[10%] h-80 w-80 rounded-full bg-[#A96F46]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B9794F]/20 bg-[#B9794F]/[0.06] px-4 py-2 text-xs font-medium text-[#805235] backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#A96F46] shadow-[0_0_10px_rgba(169,111,70,0.5)]" />
            What We Do
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-4xl font-black tracking-[-0.04em] text-[#352319] sm:text-5xl lg:text-6xl"
          >
            Digital Solutions
            <span className="block bg-gradient-to-r from-[#C58C63] via-[#B9794F] to-[#8D5838] bg-clip-text text-transparent">
              Built For Growth.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6E5A4B] sm:text-lg"
          >
            From powerful web applications to intelligent AI systems,
            we combine technology, strategy and design to build
            digital products that make an impact.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: -2,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-1 rounded-[25px] ${service.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative h-full overflow-hidden rounded-[22px] border border-[#E0D2C5] bg-gradient-to-br from-[#FFFDFC] to-[#F3E9DE] p-7 shadow-[0_15px_45px_rgba(111,78,55,0.07)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#C9A68A] group-hover:shadow-[0_20px_55px_rgba(111,78,55,0.12)]">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#B9794F]/[0.03] blur-3xl transition-all duration-500 group-hover:bg-[#B9794F]/[0.08]" />

                  <div className="flex items-start justify-between">
                    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#E0D2C5] bg-[#F8F1E8]">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
                      />

                      <Icon
                        size={24}
                        strokeWidth={1.7}
                        className="relative text-[#76513D] transition-all duration-500 group-hover:scale-110 group-hover:text-[#A96F46]"
                      />
                    </div>

                    <span className="text-xs font-medium tracking-widest text-[#B5A69A]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-bold tracking-tight text-[#3E281D]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[84px] text-sm leading-6 text-[#6E5A4B]">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#E3D7CC] pt-5">
                    <span className="text-xs font-medium text-[#958274] transition-colors group-hover:text-[#684735]">
                      Explore Service
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E0D2C5] bg-[#F8F1E8] text-[#806E61] transition-all duration-300 group-hover:border-[#B9794F]/30 group-hover:bg-[#B9794F]/10 group-hover:text-[#A96F46]"
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${service.gradient} transition-all duration-700 group-hover:w-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(169,111,70,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 rounded-xl border border-[#E0D2C5] bg-[#FFFDFC] px-6 py-3.5 text-sm font-semibold text-[#4A3021] shadow-[0_10px_30px_rgba(111,78,55,0.06)] backdrop-blur-xl transition-all hover:border-[#B9794F]/30"
          >
            Have a project in mind?

            <span className="text-[#A96F46]">
              Let's talk
            </span>

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#F8F1E9] px-6 py-28 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,121,79,0.12),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(211,170,132,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,91,58,0.07),transparent_30%)]" />

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
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B8794F]/[0.08]"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9A6040]/[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[32px] border border-[#7D5943]/10 bg-gradient-to-br from-white/75 via-white/55 to-[#F1E3D6]/70 px-6 py-16 text-center shadow-[0_30px_100px_rgba(92,59,39,0.10)] backdrop-blur-2xl sm:px-12 sm:py-20 lg:px-20"
        >
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B8794F]/70 to-transparent" />

          <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-[#B8794F]/[0.08] blur-[90px]" />

          <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-[#9A6040]/[0.07] blur-[90px]" />

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B8794F]/20 bg-[#B8794F]/[0.08]"
          >
            <Sparkles
              size={24}
              strokeWidth={1.6}
              className="text-[#9A6040]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A6040]"
          >
            Let's Build Something Great
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="relative mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#3B261A] sm:text-5xl lg:text-7xl"
          >
            Have An Idea?
            <span className="block bg-gradient-to-r from-[#9A6040] via-[#B8794F] to-[#C99772] bg-clip-text text-transparent">
              Let's Make It Real.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="relative mx-auto mt-6 max-w-2xl text-base leading-7 text-[#806D5E] sm:text-lg"
          >
            Tell us about your idea, and we'll help you turn it into
            a powerful digital product that your customers will love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 45px rgba(184,121,79,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#A96D49] via-[#B8794F] to-[#C08A67] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(139,91,58,0.15)]"
            >
              Start Your Project

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.button>

            <motion.a
              href="mailto:zaphtech.solutions@gmail.com"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              className="flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-[#7D5943]/15 bg-white/50 px-6 py-3.5 text-sm font-semibold text-[#5F4030] backdrop-blur-xl transition-all hover:border-[#B8794F]/30 hover:bg-[#B8794F]/[0.06] hover:text-[#8F583B]"
            >
              <Mail size={17} />
              Get In Touch
            </motion.a>
          </motion.div>

          <div className="relative mx-auto mt-12 flex max-w-md flex-col items-center justify-center gap-4 border-t border-[#7D5943]/10 pt-8 sm:flex-row">
            <div className="flex items-center gap-2 text-xs text-[#907B6C]">
              <MessageCircle
                size={15}
                className="text-[#9A6040]"
              />
              Free project consultation
            </div>

            <div className="hidden h-1 w-1 rounded-full bg-[#B8A294] sm:block" />

            <div className="flex items-center gap-2 text-xs text-[#907B6C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7A9B65] shadow-[0_0_8px_rgba(122,155,101,0.6)]" />
              Currently accepting projects
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#B8794F] to-transparent opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
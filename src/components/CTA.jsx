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
  const navigate = useNavigate() ;
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#030817] px-6 py-28 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.12),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.08),transparent_30%)]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
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
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.05]"
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
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.04]"
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
          className="relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-white/[0.015] px-6 py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:px-12 sm:py-20 lg:px-20"
        >
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-cyan-400/[0.08] blur-[90px]" />

          <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-violet-500/[0.08] blur-[90px]" />

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06]"
          >
            <Sparkles
              size={24}
              strokeWidth={1.6}
              className="text-cyan-300"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300"
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
            className="relative mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
          >
            Have An Idea?
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
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
            className="relative mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
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
            <motion.a
             onClick={()=> navigate('/contact')}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 45px rgba(34,211,238,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(37,99,235,0.15)]"
            >
              Start Your Project

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

          <motion.a
  href="mailto:zaphtech.solutions@gmail.com"
  whileHover={{
    scale: 1.03,
  }}
  whileTap={{ scale: 0.97 }}
  className="flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-400/20 hover:bg-white/[0.06]"
>
  <Mail size={17} />

  Get In Touch
</motion.a>
          </motion.div>

          <div className="relative mx-auto mt-12 flex max-w-md flex-col items-center justify-center gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MessageCircle
                size={15}
                className="text-cyan-400"
              />
              Free project consultation
            </div>

            <div className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              Currently accepting projects
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
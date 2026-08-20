import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Hamza Khan",
    role: "Founder & CEO",
    company: "Nexora Solutions",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "Zaptech understood our requirements from day one and turned our idea into a professional product. The communication was excellent and the final result felt far better than we expected.",
  },
  {
    name: "Ayesha Malik",
    role: "Product Manager",
    company: "Lahore Digital",
    image: "https://i.pravatar.cc/150?img=44",
    review:
      "We needed a modern platform that was fast, reliable and easy to manage. Zaptech delivered exactly that. Their attention to detail and willingness to improve things throughout the project really stood out.",
  },
  {
    name: "Usman Ahmed",
    role: "Co-Founder",
    company: "Karachi Commerce",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Working with Zaptech was a smooth experience. They handled both the design and development professionally and were always responsive whenever we had questions or requested changes.",
  },
  {
    name: "Omar Al Mansoori",
    role: "Managing Director",
    company: "Gulf Horizon LLC",
    image: "https://i.pravatar.cc/150?img=33",
    review:
      "The team delivered a clean and scalable solution for our business. They were professional throughout the project, understood our goals quickly, and delivered everything on schedule.",
  },
  {
    name: "James Anderson",
    role: "Founder",
    company: "Northstar Digital",
    image: "https://i.pravatar.cc/150?img=68",
    review:
      "Zaptech brought our concept to life with a great balance of design and engineering. The product feels polished, performs well, and the team was genuinely easy to work with.",
  },
];
const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#030817] py-28 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(6,182,212,0.09),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(124,58,237,0.08),transparent_28%)]" />

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
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            Client Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            Trusted By
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Ambitious Businesses.
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
            Real experiences from businesses that trusted us to
            bring their digital vision to life.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-7 backdrop-blur-2xl sm:p-10 lg:p-14"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/[0.05] blur-[80px]" />

            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-500/[0.05] blur-[80px]" />

            <Quote
              size={70}
              strokeWidth={1}
              className="absolute right-8 top-8 text-cyan-300/[0.06] sm:right-12 sm:top-10"
            />

            <div className="relative">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                    className="text-cyan-300"
                  />
                ))}
              </div>

              <blockquote className="mt-8 max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl lg:text-4xl">
                “{testimonial.review}”
              </blockquote>

              <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={previous}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    onClick={next}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-60" />
          </motion.div>

          <div className="mt-7 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-8 bg-cyan-300"
                    : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-center backdrop-blur-xl">
            <p className="text-2xl font-black text-white">
              5.0
            </p>

            <div className="mt-2 flex justify-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={12}
                  fill="currentColor"
                  className="text-cyan-300"
                />
              ))}
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Average Rating
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-center backdrop-blur-xl">
            <p className="text-2xl font-black text-white">
              100%
            </p>

            <p className="mt-7 text-xs text-slate-500">
              Client Satisfaction
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-center backdrop-blur-xl sm:col-span-1">
            <p className="text-2xl font-black text-white">
              30+
            </p>

            <p className="mt-7 text-xs text-slate-500">
              Projects Delivered
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Hamza Khan",
    role: "Founder & CEO",
    company: "Nexora Solutions",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "Zaphtech understood our requirements from day one and turned our idea into a professional product. The communication was excellent and the final result felt far better than we expected.",
  },
  {
    name: "Ayesha Malik",
    role: "Product Manager",
    company: "Lahore Digital",
    image: "https://i.pravatar.cc/150?img=44",
    review:
      "We needed a modern platform that was fast, reliable and easy to manage. Zaphtech delivered exactly that. Their attention to detail and willingness to improve things throughout the project really stood out.",
  },
  {
    name: "Usman Ahmed",
    role: "Co-Founder",
    company: "Karachi Commerce",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Working with Zaphtech was a smooth experience. They handled both the design and development professionally and were always responsive whenever we had questions or requested changes.",
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
      "Zaphtech brought our concept to life with a great balance of design and engineering. The product feels polished, performs well, and the team was genuinely easy to work with.",
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
      className="relative overflow-hidden bg-[#F8F1E9] py-28 sm:py-32"
    >
      {/* Warm background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(184,121,79,0.10),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(211,170,132,0.08),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(139,91,58,0.07),transparent_28%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(76,48,32,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(76,48,32,0.18) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Animated warm glow */}
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
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B8794F]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B8794F]/20 bg-[#B8794F]/[0.07] px-4 py-2 text-xs font-medium text-[#805336] backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8794F] shadow-[0_0_10px_rgba(184,121,79,0.7)]" />
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
            className="text-4xl font-black tracking-[-0.04em] text-[#3B261A] sm:text-5xl lg:text-6xl"
          >
            Trusted By
            <span className="block bg-gradient-to-r from-[#9A6040] via-[#B8794F] to-[#C99772] bg-clip-text text-transparent">
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
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#806D5E] sm:text-lg"
          >
            Real experiences from businesses that trusted us to
            bring their digital vision to life.
          </motion.p>
        </div>

        {/* Main testimonial */}
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
            className="relative overflow-hidden rounded-[28px] border border-[#7D5943]/10 bg-gradient-to-br from-white/75 to-[#F1E3D6]/65 p-7 shadow-[0_20px_60px_rgba(92,59,39,0.07)] backdrop-blur-2xl sm:p-10 lg:p-14"
          >
            {/* Card glows */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#B8794F]/[0.06] blur-[80px]" />

            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#9A6040]/[0.05] blur-[80px]" />

            {/* Quote icon */}
            <Quote
              size={70}
              strokeWidth={1}
              className="absolute right-8 top-8 text-[#B8794F]/[0.10] sm:right-12 sm:top-10"
            />

            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                    className="text-[#B8794F]"
                  />
                ))}
              </div>

              {/* Review */}
              <blockquote className="mt-8 max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-[#3B261A] sm:text-3xl lg:text-4xl">
                “{testimonial.review}”
              </blockquote>

              {/* User + Controls */}
              <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#7D5943]/15 shadow-sm">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#3B261A]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#907B6C]">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={previous}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7D5943]/10 bg-white/50 text-[#806D5E] transition-all duration-300 hover:border-[#B8794F]/30 hover:bg-[#B8794F]/10 hover:text-[#9A6040]"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7D5943]/10 bg-white/50 text-[#806D5E] transition-all duration-300 hover:border-[#B8794F]/30 hover:bg-[#B8794F]/10 hover:text-[#9A6040]"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#B8794F] via-[#A96D49] to-[#C99772] opacity-70" />
          </motion.div>

          {/* Slider indicators */}
          <div className="mt-7 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-8 bg-[#B8794F]"
                    : "w-1.5 bg-[#7D5943]/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {/* Rating */}
          <div className="rounded-2xl border border-[#7D5943]/10 bg-white/50 p-5 text-center shadow-[0_10px_35px_rgba(92,59,39,0.04)] backdrop-blur-xl">
            <p className="text-2xl font-black text-[#3B261A]">
              5.0
            </p>

            <div className="mt-2 flex justify-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={12}
                  fill="currentColor"
                  className="text-[#B8794F]"
                />
              ))}
            </div>

            <p className="mt-2 text-xs text-[#907B6C]">
              Average Rating
            </p>
          </div>

          {/* Satisfaction */}
          <div className="rounded-2xl border border-[#7D5943]/10 bg-white/50 p-5 text-center shadow-[0_10px_35px_rgba(92,59,39,0.04)] backdrop-blur-xl">
            <p className="text-2xl font-black text-[#3B261A]">
              100%
            </p>

            <p className="mt-7 text-xs text-[#907B6C]">
              Client Satisfaction
            </p>
          </div>

          {/* Projects */}
          <div className="col-span-2 rounded-2xl border border-[#7D5943]/10 bg-white/50 p-5 text-center shadow-[0_10px_35px_rgba(92,59,39,0.04)] backdrop-blur-xl sm:col-span-1">
            <p className="text-2xl font-black text-[#3B261A]">
              30+
            </p>

            <p className="mt-7 text-xs text-[#907B6C]">
              Projects Delivered
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { MdArrowOutward, MdLayers } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";
import { assets } from "../assets/assets";

const projects = [
  {
    title: "NOVA",
    category: "E-Commerce",
    description:
      "A modern full-stack fashion e-commerce platform designed to deliver a seamless shopping experience with product discovery, cart management, secure authentication and order processing.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: assets.project1,
    features: [
      "Modern fashion storefront",
      "Product filtering & search",
      "Product details",
      "Shopping cart",
      "User authentication",
      "Order management",
      "Responsive design",
      "Admin dashboard",
    ],
    year: "2026",
    type: "Full-Stack E-Commerce",
    liveDemo: "https://nova-6nmaxkjzf-sardar-abdullahs-projects.vercel.app/",
    github: "https://github.com/codingWithSardar/NOVA-Fashion-Store",
  },

  {
  title: "Wandor — AI-Powered Trip Planning",
  category: "AI & SaaS",
  description:
    "An AI-powered travel planning platform that creates personalized, bookable trip itineraries based on destinations, travel preferences, and inspiration photos.",
  image:
    assets.project4,
  technologies: ["React", "Node.js", "Express", "MongoDB", "AI"],
  features: [
    "AI-Powered Trip Planning",
    "Personalized Itineraries",
    "Destination Recommendations",
    "Travel Preference Matching",
    "Inspiration Photo Analysis",
    "Bookable Trip Plans",
    "Interactive Travel Experience",
    "Responsive Design",
  ],
  liveDemo: "https://wandor-ai-travel-planning-app.ai.studio",
  github: "https://github.com/Shahzaib-Malik77/Trip-Planing-With-Ai-",
  gradient: "from-violet-500/20 to-cyan-500/10",
},
 {
  title: "Mobile Shop",
  category: "E-Commerce",
  description:
    "A modern full-stack mobile shopping platform with product browsing, search and filtering, cart management, user authentication, and a seamless shopping experience.",
  image:
    assets.project3,
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  liveDemo: "https://mobile-shop-site-henna.vercel.app/",
  github: "https://github.com/codingWithSardar/Mobile-Shop-Website",
  gradient: "from-purple-500/20 to-blue-500/10",
},

{
  title: "Aurelia Estates — Luxury Real Estate",
  category: "Real Estate",
  description:
    "A premium real estate platform designed to showcase exceptional properties, private estates, and luxury living experiences through an elegant and immersive digital experience.",
  image:
    assets.project5,
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  features: [
    "Luxury Property Showcase",
    "Property Search & Discovery",
    "Premium Estate Listings",
    "Property Details & Gallery",
    "Schedule a Viewing",
    "Featured Properties",
    "Responsive Design",
    "Elegant Luxury UI",
  ],
  liveDemo: "https://luxury-real-estate-771298118957.asia-southeast1.run.app",
  github: "https://github.com/Shahzaib-Malik77/Real-Estate-Website",
  gradient: "from-amber-500/20 to-yellow-500/10",
},
{
  title: "Dental Health — Quality Healthcare",
  category: "Healthcare",
  description:
    "A modern dental healthcare website designed to provide patients with a professional, trustworthy, and user-friendly experience for discovering dental services and booking appointments.",
  image: assets.project6,
  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ],
  features: [
    "Dental Services Showcase",
    "Doctor & Staff Information",
    "Dental Care Information",
    "Appointment Booking",
    "Dental Emergency CTA",
    "Responsive Design",
    "Modern Healthcare UI",
    "Patient-Friendly Experience",
  ],
  liveDemo: "https://dental-spark.vercel.app",
  github: "https://github.com/Shahzaib-Malik77/dental-spark-demo",
  gradient: "from-blue-500/20 to-cyan-500/10",
},
{
  title: "Bakery Brilliance — Premium B2B Bakery",
  category: "Bakery & Food",
  description:
    "A premium B2B bakery website designed to showcase high-quality bakery products, business solutions, and partnership opportunities through an elegant and immersive digital experience.",
  image: assets.project7,
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
  ],
  features: [
    "Premium Bakery Showcase",
    "Product Categories",
    "B2B Business Solutions",
    "Product Discovery",
    "Partner With Us",
    "Business Inquiry",
    "Responsive Design",
    "Premium Visual Experience",
  ],
  liveDemo: "https://bakery-brilliance.vercel.app",
  github: "https://github.com/Shahzaib-Malik77/bakery-brilliance",
  gradient: "from-amber-500/20 to-orange-500/10",
},

{
  title: "Basilico — Fine Dining & Tasting",
  category: "Restaurant",
  description:
    "A cinematic fine dining website crafted to showcase an elevated culinary experience through immersive visuals, elegant typography, tasting menus, and a premium restaurant atmosphere.",
  image: assets.project8,
  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ],
  features: [
    "Fine Dining Experience",
    "Tasting Menu Showcase",
    "Chef's Specials",
    "Restaurant Gallery",
    "Menu Discovery",
    "Table Reservation",
    "Responsive Design",
    "Cinematic Luxury UI",
  ],
  liveDemo: "https://basilico-cinematic-dining.vercel.app",
  github: "https://github.com/Shahzaib-Malik77/basilico-cinematic-dining",
  gradient: "from-amber-500/20 to-orange-500/10",
},
  {
    title: "Restaurant Website",
    category: "Restaurant & Food",
    description:
      "A modern and responsive restaurant website designed to showcase the menu, services and brand while providing customers with a smooth digital experience.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: assets.project2,
    features: [
      "Modern restaurant landing page",
      "Menu browsing",
      "Food categories",
      "Product details",
      "Cart functionality",
      "Online ordering",
      "Responsive design",
      "Admin management",
    ],
    year: "2026",
    type: "Full-Stack Restaurant Platform",
    liveDemo: "https://food-delivery-app-wine-gamma.vercel.app/",
    github: "https://github.com/codingWithSardar/Food-Delivery-Website",
  },


];

const categories = [
  "All",
  "AI & SaaS",
  "E-Commerce",
];

const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  MongoDB: <SiMongodb />,
  TypeScript: <SiTypescript />,
  Tailwind: <SiTailwindcss />,
  Flutter: <SiFlutter />,
  Firebase: <SiFirebase />,
  Python: <FaPython />,
  "Next.js": <SiNextdotjs />,
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="relative overflow-hidden bg-[#030817] text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_10%_70%,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(124,58,237,0.08),transparent_30%)]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-xl"
          >
            <HiSparkles size={14} />
            Selected Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
          >
            Ideas We've
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Brought To Life.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            Explore a selection of digital products, platforms and experiences
            we've designed and developed for ambitious businesses.
          </motion.p>
        </div>
      </section>

      <section className="relative px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                    : "border-white/[0.07] bg-white/[0.025] text-slate-500 hover:border-white/[0.14] hover:text-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#030817] via-[#030817]/20 to-transparent" />

                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
                    />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xl">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl">
                      <MdArrowOutward size={20} />
                    </div>
                  </div>

                  <div className="relative p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-white">
                          {project.title}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                          {project.description}
                        </p>
                      </div>

                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] sm:flex">
                        <MdLayers size={20} className="text-cyan-300" />
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-medium text-slate-500"
                        >
                          {techIcons[technology] && (
                            <span className="text-cyan-400">
                              {techIcons[technology]}
                            </span>
                          )}

                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-col gap-3 border-t border-white/[0.06] pt-5 sm:flex-row">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/demo flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(37,99,235,0.2)]"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live Demo
                        <MdArrowOutward
                          size={16}
                          className="transition-transform duration-300 group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5"
                        />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs font-semibold text-slate-300 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
                      >
                        <FaGithub size={15} />
                        View Source
                      </a>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 pb-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-r from-cyan-400/[0.06] via-blue-500/[0.05] to-violet-500/[0.06] px-7 py-14 text-center sm:px-12 sm:py-16"
        >
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Your Project Could Be
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Our Next Success Story.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Have an idea in mind? Let's turn it into something remarkable.
          </p>

          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(37,99,235,0.15)] transition-transform duration-300 hover:scale-[1.03]"
          >
            Start Your Project
            <MdArrowOutward
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Projects;

import React, { useContext, useMemo, useState } from "react";
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

import { UserContext } from "../context/UserContext";

const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  Node: <FaNodeJs />,
  Express: <FaNodeJs />,
  "Express.js": <FaNodeJs />,
  MongoDB: <SiMongodb />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  Tailwind: <SiTailwindcss />,
  Flutter: <SiFlutter />,
  Firebase: <SiFirebase />,
  Python: <FaPython />,
  "Next.js": <SiNextdotjs />,
};

const Projects = () => {
  const { projects, loading } = useContext(UserContext);

  const [activeCategory, setActiveCategory] = useState("All");

  const projectData = Array.isArray(projects) ? projects : [];

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        projectData
          .map((project) => project?.category)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, [projectData]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectData;
    }

    return projectData.filter(
      (project) => project?.category === activeCategory
    );
  }, [projectData, activeCategory]);

  if (loading) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f3ed] text-[#3f291d]">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-72 w-72 rounded-full bg-[#b47d52]/20 blur-[100px]"
        />

        <div className="relative z-10 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mx-auto h-10 w-10 rounded-full border-2 border-[#b47d52]/20 border-t-[#a66d46]"
          />

          <p className="mt-5 text-sm font-semibold text-[#806b5d]">
            Loading projects...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden bg-[#f8f3ed] text-[#3f291d]">
      <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(180,125,82,0.12),transparent_30%),radial-gradient(circle_at_10%_70%,rgba(214,174,130,0.12),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(164,108,69,0.08),transparent_30%)]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(91,55,32,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(91,55,32,0.18) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#b47d52]/15 blur-[120px]"
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b47d52]/25 bg-[#eadbc9]/40 px-4 py-2 text-xs font-medium text-[#8a5737] backdrop-blur-xl"
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
            className="text-5xl font-black leading-[0.98] tracking-[-0.05em] text-[#382318] sm:text-6xl lg:text-8xl"
          >
            Ideas We've
            <span className="block bg-gradient-to-r from-[#8f5937] via-[#b47a52] to-[#c28b60] bg-clip-text text-transparent">
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
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#7d6759] sm:text-lg"
          >
            Explore a selection of digital products, platforms and
            experiences we've designed and developed for ambitious businesses.
          </motion.p>
        </div>
      </section>

      <section className="relative px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {categories.length > 1 && (
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
                      ? "border-[#a96f48]/40 bg-[#a96f48] text-white shadow-[0_0_25px_rgba(169,111,72,0.15)]"
                      : "border-[#6f4a35]/15 bg-white/50 text-[#80695b] hover:border-[#a96f48]/30 hover:bg-[#eadbc9]/50 hover:text-[#5d3d2b]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}

          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[28px] border border-[#704a34]/10 bg-white/55 p-12 text-center shadow-[0_18px_60px_rgba(91,55,32,0.06)] backdrop-blur-xl"
            >
              <h2 className="text-2xl font-bold text-[#3d281c]">
                No Projects Found
              </h2>

              <p className="mt-3 text-sm text-[#806b5d]">
                There are currently no projects in this category.
              </p>
            </motion.div>
          ) : (
            <motion.div layout className="grid gap-6 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    layout
                    key={project._id || project.id || project.title}
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
                    className="group relative overflow-hidden rounded-[28px] border border-[#704a34]/10 bg-white/55 shadow-[0_18px_60px_rgba(91,55,32,0.06)] backdrop-blur-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image.url}
                          alt={project.title || "Project"}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#eadbc9]">
                          <MdLayers
                            size={55}
                            className="text-[#a66d46]/40"
                          />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#3b261b]/75 via-[#3b261b]/10 to-transparent" />

                      <div className="absolute inset-0 bg-gradient-to-br from-[#b47d52]/10 via-transparent to-[#e1c2a3]/10" />

                      <div className="absolute left-5 top-5">
                        <span className="rounded-full border border-white/30 bg-[#3b261b]/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xl">
                          {project.category || "Project"}
                        </span>
                      </div>

                      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#3b261b]/40 text-white backdrop-blur-xl">
                        <MdArrowOutward size={20} />
                      </div>
                    </div>

                    <div className="relative p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h2 className="text-2xl font-bold tracking-tight text-[#3d281c]">
                            {project.title}
                          </h2>

                          <p className="mt-3 text-sm leading-6 text-[#806b5d]">
                            {project.description}
                          </p>
                        </div>

                        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#704a34]/10 bg-[#eadbc9]/30 sm:flex">
                          <MdLayers
                            size={20}
                            className="text-[#a66d46]"
                          />
                        </div>
                      </div>

                      {Array.isArray(project.technologies) &&
                        project.technologies.length > 0 && (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="flex items-center gap-1.5 rounded-lg border border-[#704a34]/10 bg-[#f5ede5] px-2.5 py-1.5 text-[10px] font-medium text-[#765c4b]"
                              >
                                {techIcons[technology] && (
                                  <span className="text-[#a66d46]">
                                    {techIcons[technology]}
                                  </span>
                                )}

                                {technology}
                              </span>
                            ))}
                          </div>
                        )}

                      <div className="mt-7 flex flex-col gap-3 border-t border-[#704a34]/10 pt-5 sm:flex-row">
                        {project.liveDemo ? (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/demo flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a66d46] via-[#b97c52] to-[#c58d63] px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(166,109,70,0.25)]"
                          >
                            <FaExternalLinkAlt size={12} />
                            Live Demo
                            <MdArrowOutward
                              size={16}
                              className="transition-transform duration-300 group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5"
                            />
                          </a>
                        ) : (
                          <div className="flex flex-1 items-center justify-center rounded-xl bg-[#eadbc9] px-4 py-3 text-xs font-semibold text-[#806b5d]">
                            Demo Unavailable
                          </div>
                        )}

                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#704a34]/15 bg-[#f8f1ea] px-4 py-3 text-xs font-semibold text-[#654a39] transition-all duration-300 hover:border-[#a66d46]/30 hover:bg-[#eadbc9]/40 hover:text-[#4c3020]"
                          >
                            <FaGithub size={15} />
                            View Source
                          </a>
                        ) : (
                          <div className="flex flex-1 items-center justify-center rounded-xl border border-[#704a34]/10 bg-[#f8f1ea] px-4 py-3 text-xs font-semibold text-[#806b5d]">
                            Source Unavailable
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#8f5937] via-[#b47a52] to-[#d0a078] transition-all duration-500 group-hover:w-full" />
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <section className="relative px-6 pb-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-[#704a34]/10 bg-gradient-to-r from-[#ead8c7]/50 via-[#f4e9de]/80 to-[#e7d4c2]/50 px-7 py-14 text-center shadow-[0_20px_70px_rgba(91,55,32,0.06)] sm:px-12 sm:py-16"
        >
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#a66d46]/60 to-transparent" />

          <h2 className="text-3xl font-black tracking-tight text-[#3d281c] sm:text-4xl lg:text-5xl">
            Your Project Could Be
            <span className="block bg-gradient-to-r from-[#8f5937] to-[#c18a61] bg-clip-text text-transparent">
              Our Next Success Story.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#806b5d]">
            Have an idea in mind? Let's turn it into something remarkable.
          </p>

          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#a66d46] via-[#b97c52] to-[#c58d63] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(166,109,70,0.15)] transition-transform duration-300 hover:scale-[1.03]"
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
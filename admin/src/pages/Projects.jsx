import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MdAdd,
  MdDelete,
  MdEdit,
  MdOpenInNew,
  MdSearch,
} from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        "http://localhost:5000/api/projects"
      );

      setProjects(data.projects || []);
    } catch (error) {
      console.error(
        error.response?.data?.message || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      setDeleteLoading(id);

      await axios.delete(
        `http://localhost:5000/api/projects/${id}`,
        {
          withCredentials: true,
        }
      );

      setProjects((prev) =>
        prev.filter((project) => project._id !== id)
      );
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to delete project"
      );
    } finally {
      setDeleteLoading(null);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const searchValue = search.toLowerCase();

    return (
      project.title?.toLowerCase().includes(searchValue) ||
      project.category?.toLowerCase().includes(searchValue)
    );
  });

  return (
    <main className="min-h-screen bg-[#f8f3ed] p-6 text-[#3f291d] md:p-8">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#a66d46]">
            <HiOutlineSparkles size={18} />
            Portfolio Management
          </div>

          <h1 className="text-3xl font-black tracking-tight text-[#382318]">
            Projects
          </h1>

          <p className="mt-2 text-sm text-[#806b5d]">
            Manage all projects displayed on your portfolio.
          </p>
        </div>

        <Link
          to="/add-project"
          className="flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[#a66d46] via-[#b97c52] to-[#c58d63] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
        >
          <MdAdd size={20} />
          Add Project
        </Link>
      </div>

      <div className="mb-6 rounded-2xl border border-[#704a34]/10 bg-white/70 p-4 shadow-sm">
        <div className="relative">
          <MdSearch
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a66d46]"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-[#704a34]/10 bg-[#faf7f3] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#a66d46]"
          />
        </div>
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="animate-pulse overflow-hidden rounded-2xl border border-[#704a34]/10 bg-white/70"
            >
              <div className="aspect-[16/10] bg-[#eadbc9]" />

              <div className="space-y-3 p-5">
                <div className="h-5 w-2/3 rounded bg-[#eadbc9]" />
                <div className="h-3 w-full rounded bg-[#eadbc9]" />
                <div className="h-3 w-4/5 rounded bg-[#eadbc9]" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#704a34]/20 bg-white/50 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eadbc9] text-[#a66d46]">
            <MdOpenInNew size={26} />
          </div>

          <h2 className="text-lg font-bold text-[#3d281c]">
            No Projects Found
          </h2>

          <p className="mt-2 max-w-sm text-sm text-[#806b5d]">
            {search
              ? "No projects match your search."
              : "You haven't added any projects yet."}
          </p>

          {!search && (
            <Link
              to="/add-project"
              className="mt-5 flex items-center gap-2 rounded-xl bg-[#a66d46] px-5 py-3 text-sm font-bold text-white"
            >
              <MdAdd size={19} />
              Add Your First Project
            </Link>
          )}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project._id}
              className="group overflow-hidden rounded-2xl border border-[#704a34]/10 bg-white/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project?.image?.url}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3b261b]/70 via-transparent to-transparent" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/20 bg-[#3b261b]/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#3d281c]">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-xs font-medium text-[#a66d46]">
                      {project.type}
                    </p>
                  </div>

                  {project.year && (
                    <span className="rounded-lg bg-[#eadbc9]/60 px-2.5 py-1.5 text-[10px] font-bold text-[#765c4b]">
                      {project.year}
                    </span>
                  )}
                </div>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#806b5d]">
                  {project.description}
                </p>

                {project.technologies?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies
                      .slice(0, 5)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-[#704a34]/10 bg-[#f5ede5] px-2 py-1 text-[9px] font-semibold text-[#765c4b]"
                        >
                          {technology}
                        </span>
                      ))}

                    {project.technologies.length > 5 && (
                      <span className="rounded-md bg-[#eadbc9] px-2 py-1 text-[9px] font-semibold text-[#765c4b]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                )}

                <div className="mt-5 flex gap-2 border-t border-[#704a34]/10 pt-4">
                  <Link
                    to={`/project/edit/${project._id}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#704a34]/10 bg-[#f8f1ea] px-3 py-2.5 text-xs font-bold text-[#654a39] transition hover:border-[#a66d46]/30 hover:bg-[#eadbc9]/50"
                  >
                    <MdEdit size={16} />
                    Edit
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(project._id)
                    }
                    disabled={deleteLoading === project._id}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {deleteLoading === project._id ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-600 border-t-transparent" />
                    ) : (
                      <MdDelete size={17} />
                    )}

                    Delete
                  </button>
                </div>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-[10px] font-semibold text-[#8f5937] transition hover:bg-[#eadbc9]/40"
                  >
                    <MdOpenInNew size={15} />
                    Open Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default Projects;

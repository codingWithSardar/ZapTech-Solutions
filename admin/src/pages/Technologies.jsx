import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MdAdd,
  MdCode,
  MdDelete,
  MdEdit,
  MdRefresh,
  MdSearch,
} from "react-icons/md";

const Technologies = () => {
  const navigate = useNavigate();

  const [technologies, setTechnologies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState("");
  const [error, setError] = useState("");

  const fetchTechnologies = async () => {
    try {
      setLoading(true);
      setError("");

      const { data } = await axios.get(
        "http://localhost:5000/api/technology",
        {
          withCredentials: true,
        }
      );

      setTechnologies(data.technologies || []);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch technologies"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this technology?"
    );

    if (!confirmDelete) return;

    try {
      setDeleteLoading(id);

      await axios.delete(
        `http://localhost:5000/api/technology/${id}`,
        {
          withCredentials: true,
        }
      );

      setTechnologies((prev) =>
        prev.filter((technology) => technology._id !== id)
      );
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to delete technology"
      );
    } finally {
      setDeleteLoading("");
    }
  };

  const filteredTechnologies = technologies.filter((technology) => {
    const searchValue = search.toLowerCase();

    return (
      technology.name.toLowerCase().includes(searchValue) ||
      technology.category.toLowerCase().includes(searchValue)
    );
  });

  return (
    <main className="min-h-screen bg-[#f8f3ed] px-6 py-8 text-[#3f291d] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-[#a66d46]">
              Technology Management
            </p>

            <h1 className="text-3xl font-black tracking-tight text-[#382318]">
              Technologies
            </h1>

            <p className="mt-2 text-sm text-[#806b5d]">
              Manage the technologies displayed on your website.
            </p>
          </div>

          <button
            onClick={() => navigate("/add-technology")}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a66d46] via-[#b97c52] to-[#c58d63] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
          >
            <MdAdd size={20} />
            Add Technology
          </button>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <MdSearch
              size={21}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a58e7e]"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search technologies..."
              className="w-full rounded-xl border border-[#704a34]/10 bg-white/70 py-3 pl-11 pr-4 text-sm text-[#3d281c] outline-none backdrop-blur-xl transition placeholder:text-[#b09b8c] focus:border-[#a66d46] focus:ring-2 focus:ring-[#a66d46]/10"
            />
          </div>

          <button
            onClick={fetchTechnologies}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-xl border border-[#704a34]/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#654a39] transition hover:bg-[#eadbc9]/50 disabled:opacity-50"
          >
            <MdRefresh
              size={19}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-6 flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            <span>{error}</span>

            <button
              onClick={() => setError("")}
              className="text-red-400 hover:text-red-600"
            >
              ×
            </button>
          </div>
        )}

        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-48 animate-pulse rounded-2xl border border-[#704a34]/10 bg-[#eadbc9]/50"
              />
            ))}
          </div>
        ) : filteredTechnologies.length === 0 ? (
          <div className="rounded-2xl border border-[#704a34]/10 bg-white/70 px-6 py-20 text-center shadow-sm backdrop-blur-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eadbc9] text-[#a66d46]">
              <MdCode size={30} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#3d281c]">
              No Technologies Found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-[#806b5d]">
              {search
                ? "Try searching with a different technology name or category."
                : "Start adding technologies to your technology stack."}
            </p>

            {!search && (
              <button
                onClick={() => navigate("/add-technology")}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#a66d46] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#8f5937]"
              >
                <MdAdd size={19} />
                Add Technology
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-[#806b5d]">
                {filteredTechnologies.length}{" "}
                {filteredTechnologies.length === 1
                  ? "Technology"
                  : "Technologies"}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTechnologies.map((technology) => (
                <div
                  key={technology._id}
                  className="group relative overflow-hidden rounded-2xl border border-[#704a34]/10 bg-white/70 p-5 shadow-[0_12px_40px_rgba(91,55,32,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(91,55,32,0.1)]"
                >
                  <div
                    className={`absolute -inset-10 bg-gradient-to-br ${technology.gradient} opacity-0 blur-3xl transition duration-500 group-hover:opacity-10`}
                  />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#704a34]/10 bg-[#f3e5d7] text-[#8f583b]">
                      <MdCode size={24} />
                    </div>

                    <span className="rounded-full border border-[#704a34]/10 bg-[#f5ede5] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#806b5d]">
                      {technology.category}
                    </span>
                  </div>

                  <div className="relative mt-6">
                    <h2 className="text-lg font-bold text-[#3d281c]">
                      {technology.name}
                    </h2>

                    <p className="mt-1 text-xs text-[#907b6c]">
                      {technology.category}
                    </p>
                  </div>

                  <div className="relative mt-5 rounded-xl border border-[#704a34]/10 bg-[#faf7f3] px-3 py-2">
                    <p className="truncate font-mono text-[10px] text-[#806b5d]">
                      {technology.icon}
                    </p>
                  </div>

                  <div className="relative mt-5 flex gap-2 border-t border-[#704a34]/10 pt-4">
                    <button
                      onClick={() =>
                        navigate(
                          `/technology/edit/${technology._id}`
                        )
                      }
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#704a34]/10 bg-[#f8f1ea] px-3 py-2.5 text-xs font-bold text-[#654a39] transition hover:border-[#a66d46]/30 hover:bg-[#eadbc9]/50"
                    >
                      <MdEdit size={16} />
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(technology._id)
                      }
                      disabled={deleteLoading === technology._id}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deleteLoading === technology._id ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
                      ) : (
                        <MdDelete size={16} />
                      )}
                      Delete
                    </button>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${technology.gradient} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Technologies;
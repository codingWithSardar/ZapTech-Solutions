import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  MdArrowBack,
  MdCode,
  MdSave,
} from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

const EditTechnology = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [icon, setIcon] = useState("Code2");
  const [gradient, setGradient] = useState(
    "from-[#B8794F] to-[#9A6040]"
  );

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  useEffect(() => {
    fetchTechnology();
  }, [id]);

  const fetchTechnology = async () => {
    try {
      setLoading(true);
      setError("");

      const { data } = await axios.get(
        `http://localhost:5000/api/technology/${id}`,
        {
          withCredentials: true,
        }
      );

      console.log("Technology:", data);

      const technology = data.technology || data.data;

      if (!technology) {
        throw new Error("Technology not found");
      }

      setName(technology.name || "");
      setCategory(technology.category || "");
      setIcon(technology.icon || "Code2");
      setGradient(
        technology.gradient ||
          "from-[#B8794F] to-[#9A6040]"
      );
    } catch (error) {
      console.error("Fetch Technology Error:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch technology"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // UPDATE TECHNOLOGY
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim()) {
      setError("Technology name is required");
      return;
    }

    if (!category.trim()) {
      setError("Category is required");
      return;
    }

    if (!icon.trim()) {
      setError("Icon is required");
      return;
    }

    if (!gradient.trim()) {
      setError("Gradient is required");
      return;
    }

    try {
      setUpdating(true);

      const { data } = await axios.put(
        `http://localhost:5000/api/technology/${id}`,
        {
          name,
          category,
          icon,
          gradient,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Update Technology:", data);

      if (data.success) {
        setSuccess(
          data.message ||
            "Technology updated successfully"
        );

        setTimeout(() => {
          navigate("/technologies");
        }, 800);
      }
    } catch (error) {
      console.error("Update Technology Error:", error);

      setError(
        error.response?.data?.message ||
          "Failed to update technology"
      );
    } finally {
      setUpdating(false);
    }
  };

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8f3ed]">
        <div className="flex items-center gap-3 text-sm font-semibold text-[#8f5937]">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#a66d46] border-t-transparent" />
          Loading technology...
        </div>
      </main>
    );
  }

  // =========================
  // UI
  // =========================

  return (
    <main className="min-h-screen bg-[#f8f3ed] px-6 py-8 text-[#3f291d] md:px-10">
      <div className="mx-auto max-w-5xl">

        {/* Back */}

        <button
          type="button"
          onClick={() => navigate("/technologies")}
          className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#806b5d] transition hover:text-[#a66d46]"
        >
          <MdArrowBack size={19} />
          Back to Technologies
        </button>

        {/* Header */}

        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#a66d46]">
            <HiOutlineSparkles size={18} />
            Technology Management
          </div>

          <h1 className="text-3xl font-black tracking-tight text-[#382318]">
            Edit Technology
          </h1>

          <p className="mt-2 text-sm text-[#806b5d]">
            Update your technology information.
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 lg:grid-cols-[1fr_380px]"
        >

          {/* LEFT */}

          <div className="rounded-2xl border border-[#704a34]/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl md:p-8">

            <div className="mb-7 flex items-center gap-3 border-b border-[#704a34]/10 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eadbc9] text-[#a66d46]">
                <MdCode size={23} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#3d281c]">
                  Technology Information
                </h2>

                <p className="text-xs text-[#806b5d]">
                  Update the technology details
                </p>
              </div>
            </div>

            <div className="space-y-5">

              {/* NAME */}

              <div>
                <label className="mb-2 block text-xs font-bold text-[#654a39]">
                  Technology Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="e.g. React"
                  required
                  className="w-full rounded-xl border border-[#704a34]/10 bg-[#faf7f3] px-4 py-3 text-sm text-[#3d281c] outline-none transition placeholder:text-[#b09b8c] focus:border-[#a66d46] focus:ring-2 focus:ring-[#a66d46]/10"
                />
              </div>

              {/* CATEGORY */}

              <div>
                <label className="mb-2 block text-xs font-bold text-[#654a39]">
                  Category
                </label>

                <input
                  type="text"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  placeholder="e.g. Frontend"
                  required
                  className="w-full rounded-xl border border-[#704a34]/10 bg-[#faf7f3] px-4 py-3 text-sm text-[#3d281c] outline-none transition placeholder:text-[#b09b8c] focus:border-[#a66d46] focus:ring-2 focus:ring-[#a66d46]/10"
                />
              </div>

              {/* ICON */}

              <div>
                <label className="mb-2 block text-xs font-bold text-[#654a39]">
                  Icon
                </label>

                <select
                  value={icon}
                  onChange={(e) =>
                    setIcon(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#704a34]/10 bg-[#faf7f3] px-4 py-3 text-sm text-[#3d281c] outline-none transition focus:border-[#a66d46] focus:ring-2 focus:ring-[#a66d46]/10"
                >
                  <option value="Code2">
                    Code2
                  </option>

                  <option value="FileCode2">
                    FileCode2
                  </option>

                  <option value="Braces">
                    Braces
                  </option>

                  <option value="Layers3">
                    Layers3
                  </option>

                  <option value="Terminal">
                    Terminal
                  </option>

                  <option value="Server">
                    Server
                  </option>

                  <option value="Database">
                    Database
                  </option>

                  <option value="Smartphone">
                    Smartphone
                  </option>
                </select>
              </div>

              {/* GRADIENT */}

              <div>
                <label className="mb-2 block text-xs font-bold text-[#654a39]">
                  Gradient
                </label>

                <input
                  type="text"
                  value={gradient}
                  onChange={(e) =>
                    setGradient(e.target.value)
                  }
                  placeholder="from-[#B8794F] to-[#9A6040]"
                  required
                  className="w-full rounded-xl border border-[#704a34]/10 bg-[#faf7f3] px-4 py-3 text-sm text-[#3d281c] outline-none transition placeholder:text-[#b09b8c] focus:border-[#a66d46] focus:ring-2 focus:ring-[#a66d46]/10"
                />

                <p className="mt-2 text-[10px] text-[#907b6c]">
                  Example: from-[#B8794F] to-[#9A6040]
                </p>
              </div>
            </div>

            {/* ERROR */}

            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-600">
                {error}
              </div>
            )}

            {/* SUCCESS */}

            {success && (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-xs font-semibold text-green-600">
                {success}
              </div>
            )}

            {/* BUTTONS */}

            <div className="mt-8 flex flex-col gap-3 border-t border-[#704a34]/10 pt-6 sm:flex-row">

              <button
                type="button"
                onClick={() =>
                  navigate("/technologies")
                }
                className="flex flex-1 items-center justify-center rounded-xl border border-[#704a34]/10 bg-[#f8f1ea] px-5 py-3 text-sm font-semibold text-[#654a39] transition hover:bg-[#eadbc9]/50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={updating}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a66d46] via-[#b97c52] to-[#c58d63] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {updating ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <MdSave size={19} />
                )}

                {updating
                  ? "Updating..."
                  : "Update Technology"}
              </button>
            </div>
          </div>

          {/* PREVIEW */}

          <div className="h-fit rounded-2xl border border-[#704a34]/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl">

            <div className="mb-5">
              <h2 className="text-lg font-bold text-[#3d281c]">
                Preview
              </h2>

              <p className="mt-1 text-xs text-[#806b5d]">
                This is how the technology will appear.
              </p>
            </div>

            <div className="group relative">

              {/* Glow */}

              <div
                className={`absolute -inset-1 rounded-[22px] bg-gradient-to-br ${gradient} opacity-10 blur-xl`}
              />

              {/* Card */}

              <div className="relative overflow-hidden rounded-[22px] border border-[#7D5943]/10 bg-gradient-to-br from-white/70 to-[#F1E3D6]/60 p-5 shadow-[0_12px_40px_rgba(92,59,39,0.05)]">

                <div className="relative flex items-center justify-between">

                  <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#7D5943]/10 bg-[#F3E5D7]">

                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}
                    />

                    <MdCode
                      size={22}
                      className="relative text-[#8F583B]"
                    />
                  </div>

                  <MdArrowBack
                    size={16}
                    className="rotate-180 text-[#B8A294]"
                  />
                </div>

                <h3 className="relative mt-5 text-base font-bold text-[#3B261A]">
                  {name || "Technology Name"}
                </h3>

                <p className="relative mt-1 text-xs text-[#907B6C]">
                  {category || "Category"}
                </p>

                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r ${gradient}`}
                />
              </div>
            </div>

            {/* ICON INFO */}

            <div className="mt-5 rounded-xl border border-[#704a34]/10 bg-[#faf7f3] p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#907b6c]">
                Selected Icon
              </p>

              <p className="mt-1 text-sm font-semibold text-[#654a39]">
                {icon}
              </p>
            </div>

          </div>
        </form>
      </div>
    </main>
  );
};

export default EditTechnology;
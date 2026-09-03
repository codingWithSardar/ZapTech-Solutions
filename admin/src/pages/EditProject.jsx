import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  MdAdd,
  MdArrowBack,
  MdCloudUpload,
  MdDelete,
  MdSave,
} from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

const categories = [
  "AI & SaaS",
  "E-Commerce",
  "Real Estate",
  "Healthcare",
  "Bakery & Food",
  "Restaurant",
  "Restaurant & Food",
];

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [liveDemo, setLiveDemo] = useState("");

  const [technologies, setTechnologies] = useState([]);
  const [technologyInput, setTechnologyInput] = useState("");

  const [features, setFeatures] = useState([]);
  const [featureInput, setFeatureInput] = useState("");

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // ================================
  // FETCH PROJECT
  // ================================

  useEffect(() => {
    fetchProject();
  }, [id]);

  const parseArray = (value) => {
    // Already an array
    if (Array.isArray(value)) {
      return value;
    }

    // Empty value
    if (!value) {
      return [];
    }

    // If backend returns JSON string:
    // '["React","Node.js"]'
    try {
      const parsed = JSON.parse(value);

      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (error) {
      // Ignore JSON parse error
    }

    // If normal comma-separated string:
    // "React, Node.js, MongoDB"
    if (typeof value === "string") {
      return value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    return [];
  };

  const fetchProject = async () => {
    try {
      setLoading(true);

      setMessage({
        type: "",
        text: "",
      });

      const { data } = await axios.get(
        `http://localhost:5000/api/projects/${id}`
      );

      console.log("Project response:", data);

      const project = data.project;

      if (!project) {
        throw new Error("Project not found");
      }

      setTitle(project.title || "");
      setCategory(project.category || "");
      setDescription(project.description || "");
      setYear(project.year || "");
      setType(project.type || "");
      setLiveDemo(project.liveDemo || "");

      setTechnologies(
        parseArray(project.technologies)
      );

      setFeatures(
        parseArray(project.features)
      );

      setImagePreview(
        project.image?.url || ""
      );
    } catch (error) {
      console.error("Fetch Project Error:", error);

      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch project",
      });
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // TECHNOLOGIES
  // ================================

  const addTechnology = () => {
    const value = technologyInput.trim();

    if (!value) return;

    if (technologies.includes(value)) {
      setTechnologyInput("");
      return;
    }

    setTechnologies((prev) => [
      ...prev,
      value,
    ]);

    setTechnologyInput("");
  };

  const removeTechnology = (technology) => {
    setTechnologies((prev) =>
      prev.filter((item) => item !== technology)
    );
  };

  const handleTechnologyKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology();
    }
  };

  // ================================
  // FEATURES
  // ================================

  const addFeature = () => {
    const value = featureInput.trim();

    if (!value) return;

    if (features.includes(value)) {
      setFeatureInput("");
      return;
    }

    setFeatures((prev) => [
      ...prev,
      value,
    ]);

    setFeatureInput("");
  };

  const removeFeature = (feature) => {
    setFeatures((prev) =>
      prev.filter((item) => item !== feature)
    );
  };

  const handleFeatureKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addFeature();
    }
  };

  // ================================
  // IMAGE
  // ================================

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setImagePreview(
      URL.createObjectURL(file)
    );
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview("");
  };

  // ================================
  // UPDATE PROJECT
  // ================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    if (technologies.length === 0) {
      setMessage({
        type: "error",
        text: "Please add at least one technology",
      });

      return;
    }

    try {
      setSubmitting(true);

      const formData = new FormData();

      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("year", year);
      formData.append("type", type);
      formData.append("liveDemo", liveDemo);

      formData.append(
        "technologies",
        JSON.stringify(technologies)
      );

      formData.append(
        "features",
        JSON.stringify(features)
      );

      // Only send image if user selected a new one
      if (image) {
        formData.append("image", image);
      }

      const { data } = await axios.put(
        `http://localhost:5000/api/projects/${id}`,
        formData,
        {
          withCredentials: true,
        }
      );

      console.log("Update response:", data);

      if (data.success) {
        setMessage({
          type: "success",
          text:
            data.message ||
            "Project updated successfully",
        });

        setTimeout(() => {
          navigate("/projects");
        }, 800);
      }
    } catch (error) {
      console.error("Update Project Error:", error);

      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          error.message ||
          "Failed to update project",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // ================================
  // LOADING
  // ================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8f3ed]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#eadbc9] border-t-[#a66d46]" />

          <p className="text-sm font-semibold text-[#806b5d]">
            Loading project...
          </p>
        </div>
      </main>
    );
  }

  // ================================
  // UI
  // ================================

  return (
    <main className="min-h-screen bg-[#f8f3ed] p-6 text-[#3f291d] md:p-8">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#a66d46]">
              <HiOutlineSparkles size={18} />
              Project Management
            </div>

            <h1 className="text-3xl font-black tracking-tight text-[#382318]">
              Edit Project
            </h1>

            <p className="mt-2 text-sm text-[#806b5d]">
              Update your project information.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#704a34]/10 bg-white px-4 py-2.5 text-sm font-semibold text-[#765c4b] transition hover:bg-[#eadbc9]/50"
          >
            <MdArrowBack size={19} />
            Back
          </button>
        </div>

        {/* MESSAGE */}
        {message.text && (
          <div
            className={`mb-6 rounded-xl border px-4 py-3 text-sm font-medium ${
              message.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

            {/* LEFT */}
            <div className="space-y-6">

              {/* BASIC INFORMATION */}
              <section className="rounded-2xl border border-[#704a34]/10 bg-white/70 p-6 shadow-sm">

                <h2 className="mb-6 text-lg font-bold text-[#3d281c]">
                  Basic Information
                </h2>

                <div className="space-y-5">

                  {/* TITLE */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Project Title
                    </label>

                    <input
                      type="text"
                      value={title}
                      onChange={(e) =>
                        setTitle(e.target.value)
                      }
                      placeholder="e.g. NOVA"
                      required
                      className="w-full rounded-xl border border-[#704a34]/15 bg-[#faf7f3] px-4 py-3 text-sm outline-none transition focus:border-[#a66d46]"
                    />
                  </div>

                  {/* CATEGORY */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Category
                    </label>

                    <select
                      value={category}
                      onChange={(e) =>
                        setCategory(e.target.value)
                      }
                      required
                      className="w-full rounded-xl border border-[#704a34]/15 bg-[#faf7f3] px-4 py-3 text-sm outline-none focus:border-[#a66d46]"
                    >
                      <option value="">
                        Select category
                      </option>

                      {categories.map((item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* DESCRIPTION */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Description
                    </label>

                    <textarea
                      value={description}
                      onChange={(e) =>
                        setDescription(e.target.value)
                      }
                      placeholder="Describe your project..."
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-[#704a34]/15 bg-[#faf7f3] px-4 py-3 text-sm outline-none transition focus:border-[#a66d46]"
                    />
                  </div>

                </div>
              </section>

              {/* TECHNOLOGIES */}
              <section className="rounded-2xl border border-[#704a34]/10 bg-white/70 p-6 shadow-sm">

                <h2 className="text-lg font-bold">
                  Technologies
                </h2>

                <p className="mt-1 text-xs text-[#806b5d]">
                  Add technologies used in this project.
                </p>

                <div className="mt-5 flex gap-2">

                  <input
                    type="text"
                    value={technologyInput}
                    onChange={(e) =>
                      setTechnologyInput(e.target.value)
                    }
                    onKeyDown={handleTechnologyKeyDown}
                    placeholder="e.g. React"
                    className="flex-1 rounded-xl border border-[#704a34]/15 bg-[#faf7f3] px-4 py-3 text-sm outline-none focus:border-[#a66d46]"
                  />

                  <button
                    type="button"
                    onClick={addTechnology}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a66d46] text-white transition hover:bg-[#8f5937]"
                  >
                    <MdAdd size={22} />
                  </button>

                </div>

                <div className="mt-4 flex flex-wrap gap-2">

                  {technologies.map(
                    (technology, index) => (
                      <div
                        key={`${technology}-${index}`}
                        className="flex items-center gap-2 rounded-lg bg-[#eadbc9] px-3 py-2 text-xs font-semibold text-[#654a39]"
                      >
                        <span>
                          {technology}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            removeTechnology(
                              technology
                            )
                          }
                          className="text-red-500 transition hover:text-red-700"
                        >
                          <MdDelete size={15} />
                        </button>
                      </div>
                    )
                  )}

                </div>
              </section>

              {/* FEATURES */}
              <section className="rounded-2xl border border-[#704a34]/10 bg-white/70 p-6 shadow-sm">

                <h2 className="text-lg font-bold">
                  Project Features
                </h2>

                <p className="mt-1 text-xs text-[#806b5d]">
                  Add important features of this project.
                </p>

                <div className="mt-5 flex gap-2">

                  <input
                    type="text"
                    value={featureInput}
                    onChange={(e) =>
                      setFeatureInput(e.target.value)
                    }
                    onKeyDown={handleFeatureKeyDown}
                    placeholder="e.g. User Authentication"
                    className="flex-1 rounded-xl border border-[#704a34]/15 bg-[#faf7f3] px-4 py-3 text-sm outline-none focus:border-[#a66d46]"
                  />

                  <button
                    type="button"
                    onClick={addFeature}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a66d46] text-white transition hover:bg-[#8f5937]"
                  >
                    <MdAdd size={22} />
                  </button>

                </div>

                <div className="mt-4 space-y-2">

                  {features.map(
                    (feature, index) => (
                      <div
                        key={`${feature}-${index}`}
                        className="flex items-center justify-between rounded-lg border border-[#704a34]/10 bg-[#faf7f3] px-3 py-2.5 text-xs"
                      >
                        <span>
                          {feature}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            removeFeature(feature)
                          }
                          className="text-red-500 transition hover:text-red-700"
                        >
                          <MdDelete size={16} />
                        </button>
                      </div>
                    )
                  )}

                </div>
              </section>

              {/* PROJECT DETAILS */}
              <section className="rounded-2xl border border-[#704a34]/10 bg-white/70 p-6 shadow-sm">

                <h2 className="mb-6 text-lg font-bold">
                  Project Details
                </h2>

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* YEAR */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Year
                    </label>

                    <input
                      type="text"
                      value={year}
                      onChange={(e) =>
                        setYear(e.target.value)
                      }
                      placeholder="2026"
                      className="w-full rounded-xl border border-[#704a34]/15 bg-[#faf7f3] px-4 py-3 text-sm outline-none focus:border-[#a66d46]"
                    />
                  </div>

                  {/* TYPE */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Project Type
                    </label>

                    <input
                      type="text"
                      value={type}
                      onChange={(e) =>
                        setType(e.target.value)
                      }
                      placeholder="Full-Stack E-Commerce"
                      className="w-full rounded-xl border border-[#704a34]/15 bg-[#faf7f3] px-4 py-3 text-sm outline-none focus:border-[#a66d46]"
                    />
                  </div>

                  {/* LIVE DEMO */}
                  <div className="sm:col-span-2">

                    <label className="mb-2 block text-sm font-semibold">
                      Live Demo URL
                    </label>

                    <input
                      type="url"
                      value={liveDemo}
                      onChange={(e) =>
                        setLiveDemo(e.target.value)
                      }
                      placeholder="https://example.com"
                      className="w-full rounded-xl border border-[#704a34]/15 bg-[#faf7f3] px-4 py-3 text-sm outline-none focus:border-[#a66d46]"
                    />

                  </div>

                </div>
              </section>

            </div>

            {/* RIGHT */}
            <div>

              <div className="sticky top-6 rounded-2xl border border-[#704a34]/10 bg-white/70 p-6 shadow-sm">

                <h2 className="mb-5 text-lg font-bold">
                  Project Image
                </h2>

                {/* IMAGE */}
                <div className="overflow-hidden rounded-2xl border-2 border-dashed border-[#a66d46]/30 bg-[#faf7f3]">

                  {imagePreview ? (
                    <div className="relative aspect-[16/10]">

                      <img
                        src={imagePreview}
                        alt="Project Preview"
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red-500 text-white shadow-lg transition hover:bg-red-600"
                      >
                        <MdDelete size={19} />
                      </button>

                    </div>
                  ) : (
                    <label
                      htmlFor="projectImage"
                      className="flex aspect-[16/10] cursor-pointer flex-col items-center justify-center text-center"
                    >
                      <MdCloudUpload
                        size={42}
                        className="mb-3 text-[#a66d46]"
                      />

                      <p className="text-sm font-semibold">
                        Upload Project Image
                      </p>

                      <p className="mt-1 text-xs text-[#806b5d]">
                        PNG, JPG or WEBP
                      </p>
                    </label>
                  )}

                </div>

                {/* CHANGE IMAGE */}
                <label
                  htmlFor="projectImage"
                  className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#704a34]/10 bg-white px-4 py-3 text-sm font-semibold text-[#765c4b] transition hover:bg-[#eadbc9]/40"
                >
                  <MdCloudUpload size={19} />

                  {image
                    ? "Change Image"
                    : "Select New Image"}
                </label>

                <input
                  id="projectImage"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <p className="mt-3 text-xs leading-5 text-[#907b6c]">
                  Select a new image only if you want
                  to replace the existing project image.
                </p>

                {/* UPDATE BUTTON */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a66d46] via-[#b97c52] to-[#c58d63] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />

                      Updating Project...
                    </>
                  ) : (
                    <>
                      <MdSave size={20} />

                      Update Project
                    </>
                  )}
                </button>

              </div>

            </div>

          </div>

        </form>
      </div>
    </main>
  );
};

export default EditProject;
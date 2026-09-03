import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdLogin } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {setAdmin} = useContext(AdminContext)
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        setAdmin(data?.admin)
        navigate("/");
      }
    } catch (error) {
      setAdmin(null)
      setError(
        error.response?.data?.message ||
          "Login failed"
      );
      navigate('/admin/login')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f3ed] px-4">

      <div className="w-full max-w-md">

        {/* Logo / Heading */}

        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a66d46] to-[#c58d63] text-white shadow-lg">
            <HiOutlineSparkles size={28} />
          </div>

          <h1 className="text-3xl font-black tracking-tight text-[#382318]">
            ZaphTech
          </h1>

          <p className="mt-2 text-sm text-[#806b5d]">
            Admin Panel
          </p>

        </div>

        {/* Card */}

        <div className="rounded-3xl border border-[#704a34]/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(92,59,39,0.08)] backdrop-blur-xl sm:p-8">

          <div className="mb-7">

            <h2 className="text-xl font-bold text-[#382318]">
              Welcome Back
            </h2>

            <p className="mt-1 text-sm text-[#806b5d]">
              Login to access your admin dashboard.
            </p>

          </div>

          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Email */}

            <div>

              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#654a39]">
                Email
              </label>

              <div className="relative">

                <MdEmail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a66d46]"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="admin@zaphtech.com"
                  className="w-full rounded-xl border border-[#704a34]/10 bg-[#faf7f3] py-3 pl-11 pr-4 text-sm text-[#3d281c] outline-none transition focus:border-[#a66d46] focus:bg-white focus:ring-4 focus:ring-[#a66d46]/10"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#654a39]">
                Password
              </label>

              <div className="relative">

                <MdLock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a66d46]"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-[#704a34]/10 bg-[#faf7f3] py-3 pl-11 pr-4 text-sm text-[#3d281c] outline-none transition focus:border-[#a66d46] focus:bg-white focus:ring-4 focus:ring-[#a66d46]/10"
                />

              </div>

            </div>

            {/* Button */}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a66d46] via-[#b97c52] to-[#c58d63] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Signing in...
                </>
              ) : (
                <>
                  <MdLogin size={20} />
                  Login to Dashboard
                </>
              )}

            </button>

          </form>

        </div>

        <p className="mt-6 text-center text-xs text-[#907b6c]">
          © 2026 ZaphTech. Admin access only.
        </p>

      </div>

    </div>
  );
};

export default AdminLogin;
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdFolder,
  MdCode,
  MdMessage,
  MdLogout,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";
import axios from "axios";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const {setAdmin} = useContext(AdminContext)


  const handleLogout = async () => {
  try {
    await axios.get(
      "http://localhost:5000/api/admin/logout",
      {
        withCredentials: true,
      }
    );
    setAdmin(null)

    navigate("/admin/login");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};


  const navClass = ({ isActive }) =>
    `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
      isActive
        ? "bg-[#a66d46] text-white shadow-md"
        : "text-[#765c4b] hover:bg-[#eadbc9]/60 hover:text-[#4c3020]"
    }`;

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-[#704a34]/10 bg-[#f8f3ed] text-[#5c3d2b] shadow-md lg:hidden"
      >
        <MdMenu size={24} />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-fit flex-col border-r border-[#704a34]/10 bg-[#f8f3ed] text-[#3f291d] shadow-xl transition-transform duration-300 lg:translate-x-0 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-[#704a34]/10 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#a66d46] to-[#c58d63] text-white shadow-lg">
              <HiOutlineSparkles size={21} />
            </div>

            <div>
              <h1 className="text-lg font-black tracking-tight text-[#382318]">
                Admin Panel
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-widest text-[#806b5d]">
                Portfolio Management
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#765c4b] hover:bg-[#eadbc9] lg:hidden"
          >
            <MdClose size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-[#a66d46]">
            Overview
          </div>

          <NavLink to="/" onClick={handleNavigation} className={navClass}>
            <MdDashboard size={20} />
            Dashboard
          </NavLink>

          <div className="mb-3 mt-7 px-3 text-[10px] font-bold uppercase tracking-widest text-[#a66d46]">
            Portfolio
          </div>

          <NavLink
            to="/projects"
            onClick={handleNavigation}
            className={navClass}
          >
            <MdFolder size={20} />
            Projects
          </NavLink>

          <NavLink
            to="/technologies"
            onClick={handleNavigation}
            className={navClass}
          >
            <MdCode size={20} />
            Technologies
          </NavLink>

          <div className="mb-3 mt-7 px-3 text-[10px] font-bold uppercase tracking-widest text-[#a66d46]">
            Leads
          </div>

          <NavLink
            to="/client-requirements"
            onClick={handleNavigation}
            className={navClass}
          >
            <MdMessage size={20} />
            Client Requirements

            <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#eadbc9] px-1.5 text-[9px] font-bold text-[#8f5937]">
              0
            </span>
          </NavLink>
        </div>

        <div className="border-t border-[#704a34]/10 p-4">
          <button
            onClick={handleLogout}

            type="button"
            className="flex cursor-pointer w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#765c4b] transition hover:bg-red-50 hover:text-red-600"
          >
            <MdLogout size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
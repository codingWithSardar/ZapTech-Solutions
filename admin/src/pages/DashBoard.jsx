import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FolderKanban,
  Code2,
  Users,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const [projectsRes, technologiesRes, requirementsRes] =
        await Promise.all([
          axios.get("http://localhost:5000/api/projects" , {withCredentials : true}),
          axios.get("http://localhost:5000/api/technology" ,{withCredentials : true}),
          axios.get("http://localhost:5000/api/client", {withCredentials : true}),
        ]);

      setProjects(projectsRes.data?.projects || projectsRes.data?.data || []);
      setTechnologies(
        technologiesRes.data?.technologies ||
          technologiesRes.data?.data ||
          []
      );
      setRequirements(
        requirementsRes.data?.requirements ||
          requirementsRes.data?.data ||
          []
      );
    } catch (error) {
      console.error("Dashboard data error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const stats = [
    {
      title: "Total Projects",
      value: projects.length,
      icon: FolderKanban,
      description: "Projects added",
    },
    {
      title: "Technologies",
      value: technologies.length,
      icon: Code2,
      description: "Technology stack",
    },
    {
      title: "Client Requirements",
      value: requirements.length,
      icon: Users,
      description: "Total inquiries",
    },
  ];

  const recentRequirements = [...requirements]
    .reverse()
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-[#f8f1e8] p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b6946]">
            Admin Panel
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-[#3b2518] sm:text-4xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-[#806b5a]">
            Manage your projects, technologies and client inquiries.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[24px] border border-[#8b5e3c]/10 bg-[#fffaf4]/80 p-6 shadow-[0_15px_50px_rgba(111,72,42,0.06)] backdrop-blur-xl"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#b97845]/[0.06] blur-3xl transition-all duration-500 group-hover:bg-[#b97845]/[0.12]" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#b7835b]/20 bg-[#ead6c2]/50 text-[#8b5e3c]">
                    <Icon size={21} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#b8a294] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9b6946]"
                  />
                </div>

                <div className="relative mt-6">
                  <p className="text-sm font-semibold text-[#806b5a]">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-4xl font-black text-[#3b2518]">
                    {loading ? "..." : stat.value}
                  </h2>

                  <p className="mt-2 text-xs text-[#a18772]">
                    {stat.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#b97845] to-[#8f5939] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[24px] border border-[#8b5e3c]/10 bg-[#fffaf4]/80 shadow-[0_15px_50px_rgba(111,72,42,0.05)]"
          >
            <div className="flex items-center justify-between border-b border-[#8b5e3c]/10 p-6">
              <div>
                <h2 className="text-lg font-black text-[#3b2518]">
                  Recent Client Requirements
                </h2>

                <p className="mt-1 text-xs text-[#927d6a]">
                  Latest project inquiries
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ead6c2]/50 text-[#9b6946]">
                <BriefcaseBusiness size={18} />
              </div>
            </div>

            <div className="divide-y divide-[#8b5e3c]/10">
              {loading ? (
                <div className="p-8 text-center text-sm text-[#927d6a]">
                  Loading requirements...
                </div>
              ) : recentRequirements.length === 0 ? (
                <div className="p-8 text-center">
                  <Users
                    size={30}
                    className="mx-auto text-[#b8a294]"
                  />

                  <p className="mt-3 text-sm font-semibold text-[#684a35]">
                    No client requirements yet
                  </p>

                  <p className="mt-1 text-xs text-[#927d6a]">
                    New inquiries will appear here.
                  </p>
                </div>
              ) : (
                recentRequirements.map((requirement) => (
                  <div
                    key={requirement._id}
                    className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-[#ead6c2]/20"
                  >
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold text-[#4b3020]">
                        {requirement.name}
                      </h3>

                      <p className="mt-1 truncate text-xs text-[#927d6a]">
                        {requirement.email}
                      </p>

                      <p className="mt-2 text-xs font-semibold text-[#9b6946]">
                        {requirement.projectType ||
                          requirement.project_type ||
                          "Project Inquiry"}
                      </p>
                    </div>

                    <div className="hidden shrink-0 items-center gap-2 rounded-full bg-[#ead6c2]/50 px-3 py-1.5 text-[10px] font-bold text-[#80604d] sm:flex">
                      <Clock3 size={12} />
                      New
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[24px] border border-[#8b5e3c]/10 bg-[#fffaf4]/80 p-6 shadow-[0_15px_50px_rgba(111,72,42,0.05)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ead6c2]/50 text-[#9b6946]">
                <CheckCircle2 size={20} />
              </div>

              <div>
                <h2 className="text-lg font-black text-[#3b2518]">
                  Quick Overview
                </h2>

                <p className="text-xs text-[#927d6a]">
                  Current system status
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-[#f8f1e8] p-4">
                <div className="flex items-center gap-3">
                  <FolderKanban size={17} className="text-[#9b6946]" />
                  <span className="text-sm font-semibold text-[#684a35]">
                    Projects
                  </span>
                </div>

                <span className="text-sm font-black text-[#3b2518]">
                  {loading ? "..." : projects.length}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-[#f8f1e8] p-4">
                <div className="flex items-center gap-3">
                  <Code2 size={17} className="text-[#9b6946]" />
                  <span className="text-sm font-semibold text-[#684a35]">
                    Technologies
                  </span>
                </div>

                <span className="text-sm font-black text-[#3b2518]">
                  {loading ? "..." : technologies.length}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-[#f8f1e8] p-4">
                <div className="flex items-center gap-3">
                  <Users size={17} className="text-[#9b6946]" />
                  <span className="text-sm font-semibold text-[#684a35]">
                    Client Requests
                  </span>
                </div>

                <span className="text-sm font-black text-[#3b2518]">
                  {loading ? "..." : requirements.length}
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-[#b7835b]/15 bg-[#ead6c2]/25 p-4">
              <p className="text-xs leading-5 text-[#806b5a]">
                Your admin dashboard is connected with the backend and
                automatically loads the latest data.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard
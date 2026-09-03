import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Mail,
  Phone,
  Building2,
  Calendar,
  Clock3,
  DollarSign,
  FolderKanban,
  Trash2,
  Eye,
  X,
} from "lucide-react";

const ClientRequirements = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchClients = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get("http://localhost:5000/api/client" , {withCredentials : true});

      setClients(response.data.data || []);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch client requirements"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this requirement?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      await axios.delete(`http://localhost:5000/api/client/${id}` , {withCredentials : true});

      setClients((prev) => prev.filter((client) => client._id !== id));

      if (selectedClient?._id === id) {
        setSelectedClient(null);
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to delete client requirement"
      );
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f1e8] p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b6946]">
              Admin Panel
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight text-[#3b2518]">
              Client Requirements
            </h1>

            <p className="mt-2 text-sm text-[#806b5a]">
              Manage project inquiries submitted through the contact form.
            </p>
          </div>

          <div className="rounded-2xl border border-[#8b5e3c]/10 bg-[#fffaf4] px-5 py-3 shadow-sm">
            <p className="text-xs text-[#927d6a]">Total Inquiries</p>
            <p className="mt-1 text-2xl font-black text-[#5c402d]">
              {clients.length}
            </p>
          </div>
        </div>

        {loading && (
          <div className="rounded-2xl border border-[#8b5e3c]/10 bg-[#fffaf4] p-12 text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#d9c2ad] border-t-[#9b6946]" />
            <p className="mt-4 text-sm text-[#806b5a]">
              Loading client requirements...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-sm font-medium text-red-600">{error}</p>

            <button
              onClick={fetchClients}
              className="mt-4 rounded-lg bg-[#9b6946] px-5 py-2 text-sm font-semibold text-white"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && clients.length === 0 && (
          <div className="rounded-2xl border border-[#8b5e3c]/10 bg-[#fffaf4] p-16 text-center shadow-sm">
            <FolderKanban
              size={42}
              className="mx-auto text-[#b7835b]"
            />

            <h2 className="mt-5 text-xl font-bold text-[#4b3020]">
              No Client Requirements
            </h2>

            <p className="mt-2 text-sm text-[#806b5a]">
              New project inquiries will appear here.
            </p>
          </div>
        )}

        {!loading && !error && clients.length > 0 && (
          <div className="overflow-hidden rounded-[24px] border border-[#8b5e3c]/10 bg-[#fffaf4] shadow-[0_15px_50px_rgba(111,72,42,0.06)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-[#8b5e3c]/10 bg-[#f8eee4]">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#806b5a]">
                      Client
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#806b5a]">
                      Project
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#806b5a]">
                      Budget
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#806b5a]">
                      Timeline
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#806b5a]">
                      Submitted
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-[#806b5a]">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {clients.map((client) => (
                    <tr
                      key={client._id}
                      className="border-b border-[#8b5e3c]/10 transition-colors hover:bg-[#fdf7f0]"
                    >
                      <td className="px-6 py-5">
                        <div>
                          <p className="font-bold text-[#4b3020]">
                            {client.name}
                          </p>

                          <p className="mt-1 text-xs text-[#927d6a]">
                            {client.email}
                          </p>

                          {client.company && (
                            <p className="mt-1 text-xs text-[#927d6a]">
                              {client.company}
                            </p>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <span className="inline-flex rounded-full bg-[#ead6c2]/50 px-3 py-1.5 text-xs font-semibold text-[#8b5e3c]">
                          {client.projectType}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-[#5c402d]">
                        {client.budget || "Not specified"}
                      </td>

                      <td className="px-6 py-5 text-sm text-[#6f513d]">
                        {client.timeline || "Not specified"}
                      </td>

                      <td className="px-6 py-5 text-sm text-[#6f513d]">
                        {formatDate(client.createdAt)}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setSelectedClient(client)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#8b5e3c]/10 bg-[#f8eee4] text-[#8b5e3c] transition hover:bg-[#ead6c2]"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </button>

                          <button
                            onClick={() => handleDelete(client._id)}
                            disabled={deletingId === client._id}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-500 transition hover:bg-red-100 disabled:opacity-50"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {selectedClient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3b2518]/40 p-4 backdrop-blur-sm"
          onClick={() => setSelectedClient(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-[#8b5e3c]/10 bg-[#fffaf4] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#8b5e3c]/10 p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b6946]">
                  Project Inquiry
                </p>

                <h2 className="mt-1 text-2xl font-black text-[#3b2518]">
                  {selectedClient.name}
                </h2>
              </div>

              <button
                onClick={() => setSelectedClient(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f8eee4] text-[#806b5a] hover:bg-[#ead6c2]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <InfoItem
                icon={Mail}
                label="Email"
                value={selectedClient.email}
              />

              <InfoItem
                icon={Phone}
                label="Phone"
                value={selectedClient.phone || "Not provided"}
              />

              <InfoItem
                icon={Building2}
                label="Company"
                value={selectedClient.company || "Not provided"}
              />

              <InfoItem
                icon={FolderKanban}
                label="Project Type"
                value={selectedClient.projectType}
              />

              <InfoItem
                icon={DollarSign}
                label="Budget"
                value={selectedClient.budget || "Not specified"}
              />

              <InfoItem
                icon={Clock3}
                label="Timeline"
                value={selectedClient.timeline || "Not specified"}
              />

              <InfoItem
                icon={Calendar}
                label="Submitted"
                value={formatDate(selectedClient.createdAt)}
              />
            </div>

            <div className="px-6 pb-6">
              <div className="rounded-2xl border border-[#8b5e3c]/10 bg-[#f8eee4]/60 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9b6946]">
                  Project Requirements
                </p>

                <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[#5c402d]">
                  {selectedClient.message}
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-[#8b5e3c]/10 bg-[#f8eee4]/60 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9b6946]">
                  Contact Permission
                </p>

                <p className="mt-2 text-sm font-medium text-[#5c402d]">
                  {selectedClient.contactPermission
                    ? "Client agreed to be contacted."
                    : "Client did not give permission."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InfoItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-[#8b5e3c]/10 bg-[#f8eee4]/60 p-4">
      <div className="flex items-center gap-2 text-[#9b6946]">
        <Icon size={16} />
        <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>

      <p className="mt-2 break-words text-sm font-semibold text-[#5c402d]">
        {value}
      </p>
    </div>
  );
};

export default ClientRequirements;
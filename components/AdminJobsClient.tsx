"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Job, JobApplication } from "./CareersClient";

export default function AdminJobsClient() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [activeTab, setActiveTab] = useState<"jobs" | "applications">("jobs");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Job Form Modal State
  const [showJobFormModal, setShowJobFormModal] = useState<boolean>(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "3+ Years",
    salary: "$80,000 - $120,000 / yr",
    description: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
  });

  // Check existing session on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAuth = sessionStorage.getItem("smscloudhub_admin_auth");
      if (savedAuth === "true") {
        setAuthenticated(true);
      }
    }
  }, []);

  // Fetch jobs and applications when authenticated
  useEffect(() => {
    if (authenticated) {
      fetchJobs();
      fetchApplications();
    }
  }, [authenticated]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/careers/jobs?admin=true");
      const data = await res.json();
      if (data.success && Array.isArray(data.jobs)) {
        setJobs(data.jobs);
      }
    } catch (err) {
      console.error("Failed to fetch admin jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchApplications = async () => {
    try {
      const res = await fetch("/api/careers/apply");
      const data = await res.json();
      if (data.success && Array.isArray(data.applications)) {
        setApplications(data.applications);
      }
    } catch (err) {
      console.error("Failed to fetch candidate applications:", err);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "smscloudhub@jobs") {
      setAuthenticated(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("smscloudhub_admin_auth", "true");
      }
      setPasswordInput("");
      setAuthError("");
    } else {
      setAuthError("Incorrect password. Please enter valid admin credentials.");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("smscloudhub_admin_auth");
    }
  };

  const openCreateModal = () => {
    setEditingJob(null);
    setFormData({
      title: "",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-Time",
      experience: "3+ Years",
      salary: "$80,000 - $120,000 / yr",
      description: "",
      responsibilities: "Architect low-latency SMPP routes.\nOptimize backend microservices.\nEnsure 99.999% SLA uptime.",
      requirements: "3+ years in software / telecom engineering.\nProficiency in REST APIs & databases.\nStrong troubleshooting skills.",
      benefits: "Competitive  salary package.\nFlexible remote / hybrid work.\nHealth insurance & performance bonus.",
    });
    setShowJobFormModal(true);
  };

  const openEditModal = (job: Job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      salary: job.salary,
      description: job.description,
      responsibilities: job.responsibilities ? job.responsibilities.join("\n") : "",
      requirements: job.requirements ? job.requirements.join("\n") : "",
      benefits: job.benefits ? job.benefits.join("\n") : "",
    });
    setShowJobFormModal(true);
  };

  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url = "/api/careers/jobs";
      const method = editingJob ? "PUT" : "POST";
      const payload = {
        ...(editingJob ? { id: editingJob.id } : {}),
        ...formData,
      };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setShowJobFormModal(false);
        fetchJobs();
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert("Failed to save job posting.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteJob = async (jobId: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      setLoading(true);
      const res = await fetch(`/api/careers/jobs?id=${jobId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        fetchJobs();
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert("Failed to delete job.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (job: Job, newStatus: "Active" | "Closed" | "Draft") => {
    try {
      setLoading(true);
      const res = await fetch("/api/careers/jobs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: job.id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        fetchJobs();
      }
    } catch (err) {
      console.error("Status toggle error:", err);
    } finally {
      setLoading(false);
    }
  };

  // IF NOT AUTHENTICATED -> RENDER LOGIN FORM
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#070D18] text-slate-100 flex items-center justify-center p-4">
        <div className="bg-[#0A1220] border border-cyan-500/40 rounded-2xl max-w-md w-full p-8 space-y-6 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-3xl mx-auto">
            🔑
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">SMSCloudHub Careers Admin</h1>
            <p className="text-xs text-slate-400">
              Authorized personnel login to manage job profiles & candidate applications.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            {authError && (
              <div className="p-3 rounded-lg bg-rose-950/80 border border-rose-600 text-rose-300 text-xs font-medium">
                {authError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Admin Password</label>
              <input
                type="password"
                required
                placeholder="Enter password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm focus:border-[#0891B2] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#0891B2] hover:bg-cyan-500 text-white font-bold text-sm shadow-lg transition-colors cursor-pointer"
            >
              Access Admin Dashboard →
            </button>
          </form>

          <div className="pt-4 border-t border-slate-800/80">
            <Link href="/careers" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors">
              ← Return to Public Careers Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 font-sans pb-16">
      {/* Top Admin Navigation Bar */}
      <div className="bg-[#0A1220] border-b border-slate-800 px-4 sm:px-6 py-4 sticky top-[68px] sm:top-[78px] z-50 shadow-md">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <h1 className="text-lg font-bold text-white tracking-wide">
              SMSCloudHub Careers & Applications Admin
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/careers"
              target="_blank"
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs text-cyan-400 hover:border-cyan-500/50 transition-colors"
            >
              🌐 View Live Public Page ↗
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 hover:bg-rose-900 text-xs font-semibold transition-colors cursor-pointer"
            >
              Exit / Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-8 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("jobs")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                activeTab === "jobs"
                  ? "bg-[#0891B2] text-white shadow-lg"
                  : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              💼 Manage Job Profiles ({jobs.length})
            </button>
            <button
              onClick={() => {
                setActiveTab("applications");
                fetchApplications();
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                activeTab === "applications"
                  ? "bg-[#0891B2] text-white shadow-lg"
                  : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              📥 Received Applications ({applications.length})
            </button>
          </div>

          {activeTab === "jobs" && (
            <button
              onClick={openCreateModal}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-cyan-50 text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>+</span> Create New Job Profile
            </button>
          )}
        </div>

        {/* TAB 1: MANAGE JOB PROFILES */}
        {activeTab === "jobs" && (
          <div className="space-y-4">
            {loading && jobs.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs font-mono">Loading job profiles...</div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
                <p className="text-slate-400 text-sm">No job openings created yet.</p>
                <button
                  onClick={openCreateModal}
                  className="px-4 py-2 rounded-xl bg-[#0891B2] text-white text-xs font-bold"
                >
                  + Create First Job Opening
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded bg-cyan-950 text-[#22D3EE] text-xs font-mono font-bold">
                          {job.department}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                              job.status === "Active"
                                ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                                : job.status === "Draft"
                                ? "bg-amber-950 text-amber-400 border border-amber-800"
                                : "bg-rose-950 text-rose-400 border border-rose-800"
                            }`}
                          >
                            {job.status}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2">{job.description}</p>
                      <div className="text-xs text-cyan-400 font-mono">
                        📍 {job.location} | 💼 {job.type} | ⌛ {job.experience} | 💰 {job.salary}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                      {/* Status Toggle Dropdown */}
                      <select
                        value={job.status}
                        onChange={(e) => handleStatusChange(job, e.target.value as any)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none cursor-pointer"
                      >
                        <option value="Active">Set Active</option>
                        <option value="Draft">Set Draft</option>
                        <option value="Closed">Set Closed</option>
                      </select>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditModal(job)}
                          className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 cursor-pointer"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id, job.title)}
                          className="px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold hover:bg-rose-500/20 cursor-pointer"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: RECEIVED CANDIDATE APPLICATIONS */}
        {activeTab === "applications" && (
          <div className="space-y-4">
            {applications.length === 0 ? (
              <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400 text-sm">
                No job applications received yet.
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{app.fullName}</h3>
                        <p className="text-xs text-cyan-400 font-mono mt-0.5">Applied Position: {app.jobTitle}</p>
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        Submitted: {new Date(app.timestamp).toLocaleString()}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                        <span className="text-slate-400 block mb-1">Email Address:</span>
                        <a href={`mailto:${app.email}`} className="text-cyan-400 font-bold underline">
                          {app.email}
                        </a>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                        <span className="text-slate-400 block mb-1">Phone Number:</span>
                        <span className="text-white font-semibold">{app.phone || "N/A"}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                        <span className="text-slate-400 block mb-1">Experience:</span>
                        <span className="text-white font-semibold">{app.experienceYears}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                        <span className="text-slate-400 block mb-1">Expected Salary:</span>
                        <span className="text-white font-semibold">{app.expectedSalary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs pt-2">
                      {app.linkedin && app.linkedin !== "N/A" && (
                        <a
                          href={app.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-blue-950 border border-blue-700 text-blue-300 font-semibold hover:underline"
                        >
                          🔗 LinkedIn Profile ↗
                        </a>
                      )}
                      {app.resumeLink && app.resumeLink !== "N/A" && (
                        <a
                          href={app.resumeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-700 text-cyan-300 font-semibold hover:underline"
                        >
                          📄 View / Download Resume ↗
                        </a>
                      )}
                    </div>

                    {app.coverLetter && (
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                        <span className="text-cyan-400 font-bold block">Candidate Pitch / Cover Note:</span>
                        <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{app.coverLetter}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* CREATE / EDIT JOB FORM MODAL */}
      {showJobFormModal && (
        <div className="fixed inset-0 z-[150] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0A1220] border border-cyan-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowJobFormModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 text-xl cursor-pointer"
            >
              ✕
            </button>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Job Profile Manager</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {editingJob ? `Edit Job: ${editingJob.title}` : "Post New Job Opening"}
              </h3>
            </div>

            <form onSubmit={handleSaveJob} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Job Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Telecom Protocol Engineer"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#0891B2] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Department *</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:border-[#0891B2] focus:outline-none"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Sales & Business">Sales & Business</option>
                    <option value="Customer Operations">Customer Operations</option>
                    <option value="Product & Design">Product & Design</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dubai / Remote"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#0891B2] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Employment Type</label>
                  <input
                    type="text"
                    placeholder="Full-Time, Contract..."
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#0891B2] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Experience Required *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1+ Years, 3+ Years..."
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#0891B2] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Salary Range</label>
                  <input
                    type="text"
                    placeholder="$80k - $120k / yr"
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#0891B2] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Short Summary Description *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Overview of the role..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#0891B2] focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Responsibilities (1 bullet point per line)
                </label>
                <textarea
                  rows={3}
                  placeholder="Architect scalable nodes&#10;Optimize latency"
                  value={formData.responsibilities}
                  onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#0891B2] focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Requirements (1 bullet point per line)
                </label>
                <textarea
                  rows={3}
                  placeholder="3+ years telecom experience&#10;Proficiency in APIs"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#0891B2] focus:outline-none font-mono"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setShowJobFormModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-[#0891B2] hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-lg"
                >
                  {editingJob ? "Save Changes" : "Publish Job Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

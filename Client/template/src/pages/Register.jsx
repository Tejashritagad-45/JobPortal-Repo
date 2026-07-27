import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Register — HireHive job portal
 * -------------------------------------------------
 * Palette:  Indigo #4338CA (primary) + Violet #7C3AED (secondary)
 *           Amber  #F59E0B (accent / signature)
 *           Slate  #0F172A (text) on an indigo→violet mist background
 * Type:     "Sora" for display, "Inter" for body (loaded from Google Fonts)
 * Signature: hexagon "hive cell" badges instead of plain checkmarks,
 *            a tactile pill-toggle for Job Seeker / Employer,
 *            soft hexagon blobs floating in the background.
 *
 * NOTE: this version uses Tailwind utility classes directly instead of the
 * old `styles` module import, so it's self-contained — drop it in and go.
 * Make sure Tailwind is set up in the project (it already looked like it
 * was, based on the original classNames).
 */

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "seeker",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Load display + body fonts once
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setForm({ ...form, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const perks = [
    "Apply to roles with a single click",
    "Get matched by skills, not keywords",
    "Track every application in one place",
  ];

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-6 py-16"
      style={{
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        background:
          "linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 45%, #F5F3FF 100%)",
      }}
    >
      {/* decorative hive blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 opacity-30 blur-3xl rounded-full bg-indigo-300" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] opacity-30 blur-3xl rounded-full bg-violet-300" />
      <HexPattern className="pointer-events-none absolute top-10 right-16 w-40 h-40 opacity-[0.08] hidden lg:block" />
      <HexPattern className="pointer-events-none absolute bottom-16 left-10 w-32 h-32 opacity-[0.08] hidden lg:block" />

      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — pitch */}
        <div className="hidden lg:block">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-6"
            style={{ background: "#EEF2FF", color: "#4338CA" }}
          >
            <HexIcon className="w-3.5 h-3.5" />
            HireHive
          </span>

          <h1
            className="text-5xl leading-[1.1] font-extrabold mb-6"
            style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}
          >
            Find your{" "}
            <span className="relative inline-block">
              <span style={{ color: "#4338CA" }}>dream job</span>
              <svg
                className="absolute left-0 -bottom-1 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 C 50 1, 150 1, 198 7"
                  stroke="#F59E0B"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            faster.
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-md">
            Join a growing hive of job seekers and employers. Build your
            profile, get discovered, and hire people who actually fit.
          </p>

          <ul className="space-y-4">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3">
                <span
                  className="flex items-center justify-center w-8 h-8 shrink-0"
                  style={{ color: "#4338CA" }}
                >
                  <HexIcon className="w-8 h-8 absolute" filled />
                  <svg
                    className="relative w-3.5 h-3.5 text-white"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8.5L6.2 11.5L13 4.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-slate-700">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form card */}
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl shadow-indigo-100 border border-slate-100 px-8 py-10 sm:px-10">
          <h2
            className="text-2xl font-bold text-center mb-1"
            style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}
          >
            Create your account
          </h2>
          <p className="text-center text-sm text-slate-500 mb-8">
            Join thousands of professionals and companies building their
            future
          </p>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-5 text-center">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role toggle */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                I'm here to
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-100">
                {[
                  { key: "seeker", label: "Find a job" },
                  { key: "employer", label: "Hire talent" },
                ].map((opt) => {
                  const active = form.role === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleRoleSelect(opt.key)}
                      className={`py-2 rounded-lg text-sm font-semibold transition-all ${
                        active
                          ? "text-white shadow"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                      style={
                        active
                          ? {
                              background:
                                "linear-gradient(135deg, #4338CA, #7C3AED)",
                            }
                          : undefined
                      }
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Min 6 characters"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white transition disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #4338CA, #7C3AED)",
              }}
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold"
              style={{ color: "#4338CA" }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Small hexagon "hive cell" icon used for badges + background pattern
const HexIcon = ({ className = "", filled = false }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <polygon
      points="12,2 21,7 21,17 12,22 3,17 3,7"
      fill={filled ? "#4338CA" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.5"
    />
  </svg>
);

const HexPattern = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className}>
    {[0, 1, 2].map((row) =>
      [0, 1, 2].map((col) => (
        <polygon
          key={`${row}-${col}`}
          points="12,2 21,7 21,17 12,22 3,17 3,7"
          transform={`translate(${col * 24 + (row % 2 ? 12 : 0)}, ${
            row * 20
          }) scale(1.6)`}
          fill="#4338CA"
        />
      ))
    )}
  </svg>
);

export default Register;
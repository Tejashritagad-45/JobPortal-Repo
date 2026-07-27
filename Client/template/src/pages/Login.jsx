import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://jobportal-repo-7c7b.onrender.com/api/auth/login", form);
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "login failed");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-6 py-16"
      style={{
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        background:
          "linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 45%, #F5F3FF 100%)",
      }}
    >
      {/* decorative blobs, same as Register page */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 opacity-30 blur-3xl rounded-full bg-indigo-300" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] opacity-30 blur-3xl rounded-full bg-violet-300" />

      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — pitch, matches Register page's copy style */}
        <div className="hidden lg:block">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-6"
            style={{ background: "#EEF2FF", color: "#4338CA" }}
          >
            JobPortal
          </span>

          <h1
            className="text-5xl leading-[1.1] font-extrabold mb-6"
            style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}
          >
            Welcome{" "}
            <span style={{ color: "#4338CA" }}>back.</span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-md">
            Log in to pick up where you left off — new matches, saved jobs,
            and applications waiting for a reply.
          </p>
        </div>

        {/* Right — form card, your logic untouched */}
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl shadow-indigo-100 border border-slate-100 px-8 py-10 sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2
              className="text-2xl font-bold text-center mb-1"
              style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}
            >
              Login
            </h2>
            <p className="text-center text-sm text-slate-500 mb-6">
              Enter your details to access your account
            </p>

            {error && (
              <p
                style={{ color: "red" }}
                className="text-sm bg-red-50 border border-red-100 rounded-lg px-3 py-2 text-center"
              >
                {error}
              </p>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                placeholder="Password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white transition"
              style={{
                background: "linear-gradient(135deg, #4338CA, #7C3AED)",
              }}
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold"
              style={{ color: "#4338CA" }}
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
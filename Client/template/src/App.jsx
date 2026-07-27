import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

import JobDetail from "./pages/JobDetail";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PostJob from "./pages/PostJob";

import Login from "./pages/Login";

/**
 * Navbar — matches the HireHive Register page palette:
 * Indigo #4338CA + Violet #7C3AED gradient, hexagon logo mark,
 * pill-style nav links. Tailwind utility classes only, no external
 * styles module — drop in and go.
 */

const HexLogo = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <polygon
      points="12,2 21,7 21,17 12,22 3,17 3,7"
      fill="url(#hexGradient)"
    />
    <defs>
      <linearGradient id="hexGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4338CA" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
  </svg>
);

function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const linkBase =
    "text-sm font-medium px-3 py-2 rounded-lg transition-colors";
  const linkInactive = "text-slate-600 hover:text-indigo-700 hover:bg-indigo-50";
  const linkActive = "text-indigo-700 bg-indigo-50";

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-slate-100"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-lg"
          style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}
        >
          <HexLogo className="w-7 h-7" />
          Job<span style={{ color: "#4338CA" }}>Portal</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className={`${linkBase} ${
                  isActive("/dashboard") ? linkActive : linkInactive
                }`}
              >
                Dashboard
              </Link>

              {user.role === "employer" && (
                <Link
                  to="/post-job"
                  className={`${linkBase} ${
                    isActive("/post-job") ? linkActive : linkInactive
                  }`}
                >
                  Post a Job
                </Link>
              )}

              <button
                onClick={logout}
                className="ml-2 text-sm font-semibold px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:border-red-200 hover:text-red-600 hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`${linkBase} ${
                  isActive("/login") ? linkActive : linkInactive
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="ml-2 text-sm font-semibold text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                style={{
                  background: "linear-gradient(135deg, #4338CA, #7C3AED)",
                }}
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden px-6 pb-4 flex flex-col gap-1 border-t border-slate-100">
          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className={`${linkBase} ${
                  isActive("/dashboard") ? linkActive : linkInactive
                }`}
              >
                Dashboard
              </Link>
              {user.role === "employer" && (
                <Link
                  to="/post-job"
                  onClick={() => setMenuOpen(false)}
                  className={`${linkBase} ${
                    isActive("/post-job") ? linkActive : linkInactive
                  }`}
                >
                  Post a Job
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="text-left text-sm font-semibold px-3 py-2 rounded-lg text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={`${linkBase} ${
                  isActive("/login") ? linkActive : linkInactive
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-white px-3 py-2 rounded-lg text-center"
                style={{
                  background: "linear-gradient(135deg, #4338CA, #7C3AED)",
                }}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route
          path="/post-job"
          element={
            <ProtectedRoute role="employer">
              <PostJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

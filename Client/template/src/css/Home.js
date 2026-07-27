// css/home.js
// Tailwind utility classes for Home, matching the JobPortal palette:
// indigo #4338CA + violet #7C3AED, same family as Register/Login/Navbar.
// Import as: import { styles } from "../css/home.js"

export const styles = {
  page: "min-h-screen bg-slate-50",

  hero:
    "relative overflow-hidden flex flex-col items-center text-center px-6 pt-20 pb-28 bg-gradient-to-br from-indigo-50 via-white to-violet-50",

  heroEyebrow:
    "inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-6 bg-indigo-100 text-indigo-700",

  heroTitle:
    "text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 max-w-2xl leading-tight",

  heroAccent: "text-indigo-700",

  heroText: "text-lg text-slate-600 mb-10 max-w-xl",

  searchWrap: "relative z-10 w-full max-w-3xl -mb-16",

  jobsSection: "max-w-6xl mx-auto px-6 pt-24 pb-16",

  headingRow: "flex items-center justify-between mb-8",

  heading: "text-2xl font-bold text-slate-900",

  count:
    "text-sm font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-br from-indigo-700 to-violet-600",

  jobGrid: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",

  // states
  centerState: "flex flex-col items-center justify-center py-24 px-6 text-center",

  spinner:
    "w-10 h-10 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin mb-4",

  stateText: "text-slate-500 text-sm",

  errorText: "text-red-600 font-medium",

  emptyState:
    "flex flex-col items-center justify-center py-20 px-6 text-center border border-dashed border-slate-200 rounded-2xl bg-white",

  emptyTitle: "text-slate-700 font-semibold mb-1",

  emptyText: "text-slate-400 text-sm",
};
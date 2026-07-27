// css/dashboard.js
// Tailwind utility classes for Dashboard, matching the JobPortal palette:
// indigo #4338CA + violet #7C3AED, same family as Register/Login/Home/JobCard.
// Import as: import { styles } from "../css/dashboard.js"

export const styles = {
  page: "min-h-screen bg-slate-50 px-6 py-12",

  container: "max-w-3xl mx-auto",

  loadingWrap: "flex flex-col items-center justify-center py-24 text-center",
  spinner:
    "w-10 h-10 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin mb-4",
  loadingText: "text-slate-500 text-sm",

  header:
    "bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 flex items-center gap-4",

  avatar:
    "shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br from-indigo-700 to-violet-600",

  greeting: "text-2xl font-bold text-slate-900",

  roleBadge:
    "inline-block mt-1 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 capitalize",

  section: "bg-white rounded-2xl border border-slate-100 shadow-sm p-6",

  sectionHeader: "flex items-center justify-between mb-5",

  sectionTitle: "text-lg font-bold text-slate-900",

  sectionCount:
    "text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-br from-indigo-700 to-violet-600",

  list: "space-y-3",

  listItem:
    "flex items-center justify-between gap-4 border border-slate-100 rounded-xl px-4 py-3 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors",

  itemTitle: "font-semibold text-slate-900",

  itemMeta: "text-sm text-slate-500",

  statusBadge:
    "text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap",
};
// css/jobDetail.js
// Tailwind utility classes for JobDetail, matching the JobPortal palette:
// indigo #4338CA + violet #7C3AED, same family as Register/Login/Home/JobCard/Dashboard.
// Import as: import { styles } from "../css/jobDetail.js"

export const styles = {
  page: "min-h-screen bg-slate-50 px-6 py-12",

  container: "max-w-3xl mx-auto",

  loadingWrap: "flex flex-col items-center justify-center py-24 text-center",
  spinner:
    "w-10 h-10 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin mb-4",
  loadingText: "text-slate-500 text-sm",

  card: "bg-white rounded-2xl border border-slate-100 shadow-sm p-8",

  headerRow: "flex items-start gap-4 mb-6",

  avatar:
    "shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br from-indigo-700 to-violet-600",

  title: "text-2xl font-bold text-slate-900",

  meta: "text-slate-500 mt-1",

  description: "text-slate-700 leading-relaxed whitespace-pre-line mb-8",

  applyBox: "border-t border-slate-100 pt-6",

  textarea:
    "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition resize-none mb-4",

  applyBtn:
    "px-6 py-3 rounded-xl font-semibold text-white transition bg-gradient-to-br from-indigo-700 to-violet-600 hover:shadow-lg hover:shadow-indigo-200",

  successBox:
    "flex items-center gap-2 border-t border-slate-100 pt-6 text-green-700 font-medium",
};
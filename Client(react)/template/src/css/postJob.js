// css/postJob.js
// Tailwind utility classes for PostJob, matching the JobPortal palette:
// indigo #4338CA + violet #7C3AED, same family as the rest of the app.
// Import as: import { styles } from "../css/postJob.js"

export const styles = {
  page:
    "min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex items-center justify-center px-6 py-16",

  card:
    "w-full max-w-2xl bg-white rounded-3xl shadow-2xl shadow-indigo-100 border border-slate-100 px-8 py-10 sm:px-12",

  headerRow: "flex items-center gap-3 mb-1",

  iconBadge:
    "shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-indigo-700 to-violet-600",

  title: "text-2xl font-bold text-slate-900",

  subtitle: "text-sm text-slate-500 mb-8 mt-1",

  form: "space-y-5",

  row: "grid sm:grid-cols-2 gap-5",

  field: "flex flex-col gap-1.5",

  label: "text-sm font-medium text-slate-700",

  input:
    "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition",

  select:
    "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition",

  textarea:
    "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition resize-none",

  error: "text-xs text-red-600 -mt-1",

  divider: "border-t border-slate-100 my-1",

  submitBtn:
    "w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition bg-gradient-to-br from-indigo-700 to-violet-600 hover:shadow-lg hover:shadow-indigo-200 disabled:opacity-60 disabled:cursor-not-allowed",
};
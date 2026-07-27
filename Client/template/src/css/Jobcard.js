// css/jobCard.js
// Tailwind utility classes for JobCard, matching the JobPortal palette:
// indigo #4338CA + violet #7C3AED accents on a white card.
// Import as: import { styles } from "../css/jobCard.js"

export const styles = {
  card: "group relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-100 hover:border-indigo-200 hover:-translate-y-1 transition-all duration-200",

  link: "block no-underline",

  topRow: "flex items-start gap-3 mb-4",

  // avatar:
  //   "shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-br from-indigo-700 to-violet-600",

  titleWrap: "min-w-0",

  title:
    "text-base font-bold text-slate-900 truncate group-hover:text-indigo-700 transition-colors",

  company: "text-sm text-slate-500 truncate",

  metaRow: "flex items-center gap-1.5 text-sm text-slate-400 mb-5",

  icon: "w-4 h-4 shrink-0",

  footer: "flex items-center justify-between pt-4 border-t border-slate-100",

  salaryRow: "flex items-center gap-1.5",

  salary: "text-base font-bold text-indigo-700",

  badge:
    "text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-br from-indigo-700 to-violet-600",
};
// css/navbar.js
// Tailwind utility classes for Navbar, matching the Register page's
// indigo (#4338CA) -> violet (#7C3AED) palette. Import as:
//   import { styles } from "./css/navbar.js"

export const styles = {
  nav: "sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-slate-100 px-6 h-16 flex items-center justify-between font-sans",

  logo: "font-extrabold text-lg text-slate-900",

  NavMenu: "flex items-center gap-1",

  Dashboard:
    "text-sm font-medium px-3 py-2 rounded-lg text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors",

  job: "text-sm font-medium px-3 py-2 rounded-lg text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors",

  logOut:
    "ml-2 text-sm font-semibold px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:border-red-200 hover:text-red-600 hover:bg-red-50 transition-colors",

  login:
    "text-sm font-medium px-3 py-2 rounded-lg text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors",

  register:
    "ml-2 text-sm font-semibold text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-indigo-700 to-violet-600",
};
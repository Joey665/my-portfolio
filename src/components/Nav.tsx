import { Menu, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skill Matrix" },
  { href: "#writing", label: "Field Notes" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-400/10 bg-slate-950/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-md text-sm font-medium text-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
        >
          <Shield className="size-4 text-emerald-400 transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-mono tracking-wider text-slate-200">JB//SOC</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-slate-400/20 p-2 text-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors duration-200 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-400/10 bg-slate-950/95 transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-sm text-slate-300 transition-colors duration-200 hover:bg-slate-900 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

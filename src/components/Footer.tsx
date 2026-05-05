import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Platform: [
    { label: "For School Admins", href: "#roles" },
    { label: "For Teachers", href: "#roles" },
    { label: "For Parents", href: "#roles" },
    { label: "For Principals", href: "#roles" },
  ],
  Company: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact", href: "mailto:hello@schoolpilot.ng" },
  ],
};

const Footer = () => (
  <footer className="bg-secondary text-white" role="contentinfo">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-4 cursor-pointer" aria-label="SchoolPilot home">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <ShieldCheck className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span
              className="font-bold text-xl tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SchoolPilot
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            Mobile-first school management platform for Nigerian primary and secondary schools.
            Simplify result management, attendance, and parent communication.
          </p>
          <a
            href="mailto:hello@schoolpilot.ng"
            className="text-sm text-primary-light hover:text-white transition-colors duration-200"
          >
            hello@schoolpilot.ng
          </a>
        </div>

        {Object.entries(FOOTER_LINKS).map(([group, links]) => (
          <div key={group}>
            <h3
              className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {group}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} SchoolPilot. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">
          Built for Nigerian schools · iOS & Android
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

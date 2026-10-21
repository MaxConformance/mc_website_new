import { Link } from "wouter";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { site } from "@/config/site";

const services = [
  { href: "/services/risk-assessment", label: "Risk Assessment" },
  { href: "/services/compliance-management", label: "Compliance Management" },
  { href: "/services/security-audits", label: "Security Audits" },
  { href: "/services/web-app-development", label: "Web App Development" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Synfiniti AI" },
  { href: "/services", label: "All Services" },
  { href: "/contact", label: "Contact" },
];

const linkCls = "text-slate-600 hover:text-magenta-600 transition-colors";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="h-12" />
            <p className="text-slate-600 mt-5 text-sm leading-relaxed max-w-xs">{site.description}</p>
            <div className="flex gap-3 mt-5">
              <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"
                 className="w-10 h-10 grid place-items-center rounded-full bg-slate-100 hover:bg-slate-200 text-navy-600 hover:text-magenta-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={site.social.twitter} aria-label="X / Twitter" target="_blank" rel="noreferrer"
                 className="w-10 h-10 grid place-items-center rounded-full bg-slate-100 hover:bg-slate-200 text-navy-600 hover:text-magenta-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Services">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {company.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Get in touch</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2.5"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-magenta-600" />
                <a className={linkCls} href={`mailto:${site.email}`}>{site.email}</a></li>
              {site.phones.map((ph) => (
                <li key={ph} className="flex gap-2.5"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-magenta-600" />
                  <a className={linkCls} href={`tel:${ph.replace(/\s/g, "")}`}>{ph}</a></li>
              ))}
              {site.address && <li className="flex gap-2.5"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-magenta-600" />
                <span>{site.address}</span></li>}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-6 text-sm text-slate-500 flex flex-col sm:flex-row gap-2 justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

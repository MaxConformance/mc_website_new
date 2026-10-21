import { Link } from "wouter";
import { Scene, scenes } from "@/components/scenes";
import { Button } from "@/components/ui/button";
import {
  Shield, BarChart3, CheckCircle, ArrowRight, ClipboardCheck, Code2, SearchCheck, Radar, Workflow, Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { site, product } from "@/config/site";
import { CountUp, Float, HeroBackground, heroContainer, heroItem } from "@/components/motion";
import { stats as synStats, suites as synSuites, clients, standards } from "@/data/synfiniti";

const pillars = [
  { icon: Shield, title: "Expert Guidance", text: "Hands-on GRC and privacy consulting across ISO 27001, SOC 2, NIST, PCI DSS, HIPAA, GDPR and the DPDP Act." },
  { icon: BarChart3, title: "Synfiniti AI Platform", text: "Our own Compliance-as-a-Service platform: every framework on one shared control model, evidence collected once and reused." },
  { icon: CheckCircle, title: "Audit-Ready, Always", text: "Continuous monitoring and automation that cut audit effort by up to 80% and keep you ready all year." },
];

const services = [
  { icon: Target, title: "Risk Assessment", text: "Identify, quantify and prioritize risks with clear remediation roadmaps.", href: "/services/risk-assessment" },
  { icon: ClipboardCheck, title: "Compliance Management", text: "Map controls to frameworks and stay continuously audit-ready.", href: "/services/compliance-management" },
  { icon: SearchCheck, title: "Security Audits", text: "Independent assessments that verify controls and expose gaps.", href: "/services/security-audits" },
  { icon: Code2, title: "Web App Development", text: "Custom, secure web applications, built by the team behind Synfiniti AI.", href: "/services/web-app-development" },
];

const approach = [
  { icon: Target, title: "Risk-Based Framework", text: "Prioritize resources based on actual risk exposure and business impact." },
  { icon: Radar, title: "Continuous Monitoring", text: "Real-time visibility into your security posture and compliance status." },
  { icon: Workflow, title: "Automated Workflows", text: "Streamline processes with intelligent automation and reporting." },
];

const stats = synStats.map((s) => ({ v: s.value, l: s.label }));

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero hero-bg relative overflow-hidden text-white" style={{ contain: "paint" }}>
        <HeroBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <motion.div className="text-center lg:text-left" variants={heroContainer} initial="hidden" animate="show">
            <motion.span variants={heroItem} className="eyebrow mb-6">{site.tagline}</motion.span>
            <motion.h1 variants={heroItem} className="text-4xl sm:text-6xl font-extrabold leading-[1.05] mb-6">
              Compliance, <span className="gradient-text">simplified.</span>
            </motion.h1>
            <motion.p variants={heroItem} className="text-lg sm:text-xl text-slate-200 max-w-xl mx-auto lg:mx-0 mb-10">
              {site.description}
            </motion.p>
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/product">
                <Button size="lg" className="btn-primary px-8 h-12 text-base font-semibold w-full sm:w-auto">
                  Meet Synfiniti AI <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 h-12 text-base font-semibold text-white bg-white/10 border-white/40 hover:bg-white/20 hover:text-white w-full sm:w-auto">
                  Talk to our team
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero illustration */}
          <motion.div
            className="max-w-sm sm:max-w-md mx-auto w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Scene {...scenes.home} />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="At a glance" className="-mt-10 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <dl className="bg-white border border-slate-200 shadow-xl shadow-navy-600/10 rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-slate-200 md:divide-x">
            {stats.map((s) => (
              <div key={s.l} className="p-6 text-center">
                <dt className="sr-only">{s.l}</dt>
                <dd className="text-3xl font-extrabold gradient-text"><CountUp value={s.v} /></dd>
                <p className="text-sm text-slate-500 mt-1">{s.l}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Synfiniti feature */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d1330] via-navy-600 to-navy-500 text-white p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 items-center reveal">
            <div>
              <span className="inline-flex items-center gap-3 bg-white rounded-xl px-4 py-2 mb-6">
                <img src={product.logo} alt={product.name} className="h-8 w-auto" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our product: {product.name}</h2>
              <p className="text-white/85 text-lg mb-6">
                {product.tagline} Governance, risk, privacy, vendor assurance and cloud compliance in one platform, with AI that works on your own data.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/product">
                  <Button className="bg-white text-navy-600 hover:bg-slate-100 font-semibold h-11 px-6 w-full sm:w-auto">
                    Explore the platform <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href={product.url} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-11 px-6 w-full sm:w-auto">
                    Visit synfiniti.ai
                  </Button>
                </a>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {synSuites.map(({ name, icon: Icon }) => (
                <li key={name} className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 px-4 py-3">
                  <Icon className="w-5 h-5 text-pink-200 shrink-0" />
                  <span className="font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why {site.name}?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We pair deep compliance expertise with technology we built ourselves, so you get advice and tooling that work together.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="service-card card-hover p-8 rounded-2xl reveal">
                <div className="w-12 h-12 rounded-full icon-badge grid place-items-center mb-5">
                  <Icon className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-4 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 reveal">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our <span className="gradient-text">services</span></h2>
              <p className="text-slate-600 max-w-xl">Practical, framework-aligned consulting to protect and strengthen your organization.</p>
            </div>
            <Link href="/services" className="text-magenta-600 hover:text-magenta-700 font-medium inline-flex items-center gap-1">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, text, href }) => (
              <Link key={title} href={href} className="service-card card-hover rounded-2xl p-6 block reveal group">
                <Icon className="w-8 h-8 text-magenta-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-600 mb-4">{text}</p>
                <span className="text-sm text-indigo-300 group-hover:text-magenta-600 inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <Scene {...scenes.approach} />
          </div>
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Our <span className="gradient-text">GRC approach</span></h2>
            <p className="text-lg text-slate-600 mb-8">
              A holistic approach to governance, risk and compliance that adapts to your business and scales with your growth.
            </p>
            <ul className="space-y-5">
              {approach.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="w-10 h-10 shrink-0 rounded-lg bg-navy-600/10 border border-navy-600/20 grid place-items-center">
                    <Icon className="w-5 h-5 text-magenta-600" />
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Clients & standards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-8 reveal">Trusted by growing technology companies</h2>
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-14">
            {clients.map((c) => (
              <li key={c.name} className="bg-white border border-slate-200 rounded-xl h-24 grid place-items-center p-5 reveal" title={c.industry}>
                <img src={c.logo} alt={c.name} className="max-h-10 w-auto max-w-full object-contain" loading="lazy" />
              </li>
            ))}
          </ul>
          <h2 className="text-center text-3xl font-bold mb-3 reveal">One platform, every framework</h2>
          <p className="text-center text-slate-600 mb-8 reveal">Pre-loaded coverage for the standards and regulations your customers ask about.</p>
          <ul className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {standards.map((n) => (
              <li key={n} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-navy-600 reveal">{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl p-10 sm:p-14 text-center bg-gradient-to-br from-navy-600 to-magenta-600 text-white reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to simplify your compliance?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">Talk to our experts or request a Synfiniti AI demo or Proof of Value.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-navy-600 hover:bg-slate-100 px-8 h-12 font-semibold">Contact Us <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

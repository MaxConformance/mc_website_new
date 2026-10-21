import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Check } from "lucide-react";
import { product } from "@/config/site";
import { Scene, scenes } from "@/components/scenes";
import { CountUp } from "@/components/motion";
import { stats, suites, modules, steps, aiFeatures, standards } from "@/data/synfiniti";

export default function Product() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow mb-5">A Max Conformance product</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              <span className="gradient-text">Synfiniti AI</span>: compliance as a service
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              {product.tagline} Run ISO 27001, SOC 2, NIST, PCI DSS, HIPAA, GDPR and the India DPDP Act on one shared control model, so evidence is collected once and reused everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={product.url} target="_blank" rel="noreferrer">
                <Button className="btn-primary h-12 px-7 font-semibold w-full sm:w-auto">
                  Visit synfiniti.ai <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="h-12 px-7 font-semibold border-navy-600/30 text-navy-600 w-full sm:w-auto">
                  Request a demo
                </Button>
              </Link>
            </div>
          </div>
          <Scene {...scenes.product} />
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Synfiniti AI at a glance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <dl className="bg-white border border-slate-200 shadow-xl shadow-navy-600/10 rounded-2xl grid grid-cols-2 md:grid-cols-4 md:divide-x divide-slate-200">
            {stats.map((s) => (
              <div key={s.label} className="p-6 text-center">
                <dd className="text-3xl font-extrabold gradient-text"><CountUp value={s.value} /></dd>
                <dt className="text-sm text-slate-500 mt-1">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Suites */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Five suites, one platform</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to run governance, privacy and assurance from a single connected data model.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suites.map(({ name, text, icon: Icon, items }) => (
              <article key={name} className="service-card card-hover rounded-2xl p-7 reveal">
                <div className="w-12 h-12 rounded-full icon-badge grid place-items-center mb-5">
                  <Icon className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-slate-600 mb-4">{text}</p>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {items.map((i) => (
                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-magenta-600 shrink-0" />{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 reveal">How it works</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ title, text, icon: Icon }, i) => (
              <li key={title} className="reveal">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-navy-600 text-white grid place-items-center font-bold">{i + 1}</span>
                  <Icon className="w-5 h-5 text-magenta-600" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-slate-600 text-sm">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">14 integrated modules</h2>
            <p className="text-lg text-slate-600">Start with what you need and add more as your programme grows.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m) => (
              <div key={m.title} className="service-card rounded-xl p-5 reveal">
                <h3 className="font-semibold mb-1 text-navy-600">{m.title}</h3>
                <p className="text-sm text-slate-600">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0d1330] via-navy-600 to-magenta-700 text-white p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Permission-aware AI for compliance</h2>
            <p className="text-white/85 max-w-2xl mb-10">AI that works on your own data, with your access permissions enforced.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiFeatures.map(({ title, text, icon: Icon }) => (
                <div key={title} className="rounded-xl bg-white/10 border border-white/15 p-5">
                  <Icon className="w-6 h-6 text-pink-200 mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-white/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-3 reveal">Framework coverage</h2>
          <p className="text-slate-600 mb-8 reveal">Pre-loaded standards, regulations and cloud benchmarks.</p>
          <ul className="flex flex-wrap justify-center gap-2.5">
            {standards.map((n) => (
              <li key={n} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-navy-600">{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl p-10 sm:p-14 text-center bg-gradient-to-br from-navy-600 to-magenta-600 text-white reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See Synfiniti AI on your own data</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">Evaluate it through a structured four-month Proof of Value in a dedicated tenant, scored against your priorities.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-navy-600 hover:bg-slate-100 h-12 px-8 font-semibold">
                Request a demo or POV <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

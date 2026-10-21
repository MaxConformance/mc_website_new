import PageHero from "@/components/PageHero";
import { Scene, scenes } from "@/components/scenes";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { product } from "@/config/site";

const offerings = [
  { title: "Custom web applications", text: "Dashboards, portals, workflow tools and SaaS products designed around how your teams actually work." },
  { title: "Secure by design", text: "Role-based access, SSO, audit trails and data protection built in from the first sprint, not bolted on at the end." },
  { title: "Integrations & APIs", text: "Connect to your cloud, identity, ticketing and data systems with clean, documented APIs." },
  { title: "Cloud-ready delivery", text: "Responsive front ends, scalable back ends and repeatable deployments on the cloud platform of your choice." },
];

const process = [
  { title: "Discover", text: "Understand your users, workflows and constraints, and agree on scope." },
  { title: "Design", text: "Prototype the experience and architecture, with security and compliance requirements captured early." },
  { title: "Build", text: "Iterative delivery with regular demos, so you see working software throughout." },
  { title: "Launch & support", text: "Deployment, handover and ongoing support as your product evolves." },
];

export default function WebAppDevelopment() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title={<><span className="gradient-text">Web App Development</span> Services</>}
          text={<>We build custom web applications for our clients, using the same engineering practices that power our own homegrown product, {product.name}.</>}
          visual={<Scene {...scenes.webapp} />}
        />

        <div className="max-w-4xl mx-auto mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-5">Built by the team behind {product.name}</h2>
            <p className="text-lg text-slate-600 mb-6">
              {product.name} is designed, developed and operated in-house. That means we know what it takes to take a web product from idea to a secure, multi-user platform, and we bring that experience to your project.
            </p>
            <ul className="space-y-4">
              {offerings.map((o) => (
                <li key={o.title} className="flex gap-3">
                  <Check className="w-5 h-5 mt-1 text-magenta-600 shrink-0" />
                  <div>
                    <h3 className="font-semibold">{o.title}</h3>
                    <p className="text-slate-600">{o.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How we work</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <li key={p.title} className="service-card rounded-xl p-6">
                <span className="w-9 h-9 rounded-full bg-navy-600 text-white grid place-items-center font-bold mb-4">{i + 1}</span>
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <div className="service-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Have a product in mind?</h2>
            <p className="text-slate-600 mb-8">Tell us what you want to build and we will help you shape and deliver it.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button className="btn-primary px-8 py-3 font-semibold w-full sm:w-auto">Discuss your project</Button>
              </Link>
              <a href={product.url} target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-navy-600/30 text-navy-600 w-full sm:w-auto">
                  See {product.name} <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

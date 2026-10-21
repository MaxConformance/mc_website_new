import PageHero from "@/components/PageHero";
import { Scene, scenes } from "@/components/scenes";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Settings, Award, ArrowRight } from "lucide-react";
import { site, product } from "@/config/site";

const values = [
  { icon: CheckCircle, title: "Integrity", text: "Transparent, honest relationships built on trust." },
  { icon: Award, title: "Excellence", text: "Continuous improvement in everything we do." },
  { icon: Users, title: "Collaboration", text: "A partnership approach to client success." },
  { icon: Settings, title: "Innovation", text: "Practical technology and AI for evolving compliance needs." },
];

export default function About() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title={<>About <span className="gradient-text">{site.name}</span></>}
          text={<>{site.name} is a governance, risk and compliance company. We make enterprise-grade compliance accessible to organizations of all sizes, through expert services and our own platform.</>}
          visual={<Scene {...scenes.about} />}
        />

        <div className="max-w-4xl mx-auto mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our mission</h2>
            <p className="text-lg text-slate-600 mb-6">
              To simplify compliance: replace spreadsheets, repeated evidence requests and last-minute audit scrambles with a continuous, automated programme that is easy to own and easy to prove.
            </p>
            <p className="text-lg text-slate-600">
              Effective compliance is not only technology. It is clear ownership, good habits and a culture of security and privacy awareness across your organization.
            </p>
          </div>
        </div>

        <div className="service-card rounded-3xl p-8 sm:p-12 mb-20 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <img src={product.logo} alt={`${product.name} logo`} className="h-20 w-auto mx-auto md:mx-0" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our product: {product.name}</h2>
            <p className="text-slate-600 mb-5">
              {product.name} is the Compliance-as-a-Service platform built by {site.name}. It brings GRC, privacy (DPDP-native), vendor assurance and cloud compliance together on one shared control model, with AI that works on your own data.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/product"><Button className="btn-primary font-semibold w-full sm:w-auto">Explore the platform <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
              <a href={product.url} target="_blank" rel="noreferrer"><Button variant="outline" className="border-navy-600/30 text-navy-600 w-full sm:w-auto">synfiniti.ai</Button></a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Our values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="w-16 h-16 icon-badge rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-navy-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

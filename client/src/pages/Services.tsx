import PageHero from "@/components/PageHero";
import { Scene, scenes } from "@/components/scenes";
import { Link } from "wouter";
import { BarChart3, Calendar, Code2, Shield, Users, Compass, LifeBuoy } from "lucide-react";
import { IconTile } from "@/components/IconTile";

export default function Services() {
  const services = [
    {
      id: "risk-assessment",
      title: "Risk Assessment",
      description: "Comprehensive evaluation of your organization's cybersecurity risks with detailed remediation roadmaps.",
      icon: BarChart3,
      href: "/services/risk-assessment"
    },
    {
      id: "compliance-management", 
      title: "Compliance Management",
      description: "Navigate complex regulatory requirements with expert guidance for SOC 2, ISO 27001, HIPAA, and more.",
      icon: Calendar,
      href: "/services/compliance-management"
    },
    {
      id: "security-audits",
      title: "Security Audits",
      description: "In-depth security assessments including penetration testing, vulnerability scans, and architecture reviews.",
      icon: Shield,
      href: "/services/security-audits"
    },
    {
      id: "web-app-development",
      title: "Web App Development",
      description: "Custom, secure web applications, designed and built by the same team that created our own product, Synfiniti AI.",
      icon: Code2,
      href: "/services/web-app-development"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title={<>Our <span className="gradient-text">Services</span></>}
          text={<>Expert consulting that helps you get compliant, stay compliant and prove it, delivered with the help of our Synfiniti AI platform.</>}
          visual={<Scene {...scenes.services} />}
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link key={service.id} href={service.href}>
                <div className="service-card p-8 rounded-xl card-hover cursor-pointer">
                  <div className="w-16 h-16 icon-badge rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-navy-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-magenta-600 font-semibold">Learn More →</div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Why Choose Our Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { icon: Users, title: "Expert Team", text: "Compliance and engineering professionals with hands-on experience across industries and frameworks." },
              { icon: Compass, title: "Proven Methodology", text: "A clear, repeatable approach from assessment to certification, shaped by building Synfiniti AI ourselves." },
              { icon: LifeBuoy, title: "Ongoing Support", text: "A continuing partnership beyond project completion, with advisory support as your needs evolve." },
            ].map(({ icon, title, text }) => (
              <div key={title} className="service-card rounded-xl p-6">
                <IconTile icon={icon} size="md" className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

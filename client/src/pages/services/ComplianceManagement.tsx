import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Scene, scenes } from "@/components/scenes";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ComplianceManagement() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title={<><span className="gradient-text">Compliance Management</span> Services</>}
          text={<>Expert guidance for achieving and maintaining compliance with SOC 2, ISO 27001, HIPAA, PCI DSS, and other regulatory frameworks.</>}
          visual={<Scene {...scenes.compliance} />}
        />

        <div className="max-w-4xl mx-auto mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Compliance Support</h2>
            <p className="text-lg text-slate-600 mb-6">
              Navigate complex regulatory landscapes with confidence. Our compliance experts guide you through every step of the certification process.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-magenta-500/10 ring-1 ring-magenta-500/25 grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-magenta-600" strokeWidth={3} /></span>
                <div>
                  <h4 className="font-semibold mb-1">Gap Analysis</h4>
                  <p className="text-slate-600">Current state assessment against target compliance framework requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-magenta-500/10 ring-1 ring-magenta-500/25 grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-magenta-600" strokeWidth={3} /></span>
                <div>
                  <h4 className="font-semibold mb-1">Implementation Planning</h4>
                  <p className="text-slate-600">Detailed roadmap with timelines and resource allocation for compliance achievement.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-magenta-500/10 ring-1 ring-magenta-500/25 grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-magenta-600" strokeWidth={3} /></span>
                <div>
                  <h4 className="font-semibold mb-1">Evidence Collection</h4>
                  <p className="text-slate-600">Automated and manual evidence gathering to support audit requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-magenta-500/10 ring-1 ring-magenta-500/25 grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-magenta-600" strokeWidth={3} /></span>
                <div>
                  <h4 className="font-semibold mb-1">Audit Support</h4>
                  <p className="text-slate-600">Expert assistance during audits with documentation and remediation support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Frameworks */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Frameworks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="service-card p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-slate-600 text-sm">Service organization controls for security, availability, and confidentiality.</p>
            </div>
            <div className="service-card p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold mb-2">ISO 27001</h3>
              <p className="text-slate-600 text-sm">International standard for information security management systems.</p>
            </div>
            <div className="service-card p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold mb-2">HIPAA</h3>
              <p className="text-slate-600 text-sm">Healthcare industry privacy and security regulations compliance.</p>
            </div>
            <div className="service-card p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold mb-2">PCI DSS</h3>
              <p className="text-slate-600 text-sm">Payment card industry data security standards compliance.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="service-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Start Your Compliance Journey</h2>
            <p className="text-slate-600 mb-8">
              Let our experts guide you through the compliance process with minimal business disruption.
            </p>
            <Link href="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Get Compliance Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

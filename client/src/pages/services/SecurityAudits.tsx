import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Scene, scenes } from "@/components/scenes";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function SecurityAudits() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title={<><span className="gradient-text">Security Audits</span> Services</>}
          text={<>Comprehensive security assessments including penetration testing, vulnerability assessments, and architecture reviews to identify and remediate security weaknesses.</>}
          visual={<Scene {...scenes.audits} />}
        />

        <div className="max-w-4xl mx-auto mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Security Testing</h2>
            <p className="text-lg text-slate-600 mb-6">
              Our security audits combine automated scanning with manual testing techniques to provide thorough coverage of your attack surface.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-magenta-500/10 ring-1 ring-magenta-500/25 grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-magenta-600" strokeWidth={3} /></span>
                <div>
                  <h4 className="font-semibold mb-1">Penetration Testing</h4>
                  <p className="text-slate-600">Simulated attacks to identify exploitable vulnerabilities in systems and applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-magenta-500/10 ring-1 ring-magenta-500/25 grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-magenta-600" strokeWidth={3} /></span>
                <div>
                  <h4 className="font-semibold mb-1">Vulnerability Scanning</h4>
                  <p className="text-slate-600">Automated discovery and assessment of security weaknesses across your infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-magenta-500/10 ring-1 ring-magenta-500/25 grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-magenta-600" strokeWidth={3} /></span>
                <div>
                  <h4 className="font-semibold mb-1">Architecture Review</h4>
                  <p className="text-slate-600">Evaluation of system design and security controls for optimal protection.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-magenta-500/10 ring-1 ring-magenta-500/25 grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-magenta-600" strokeWidth={3} /></span>
                <div>
                  <h4 className="font-semibold mb-1">Code Review</h4>
                  <p className="text-slate-600">Static and dynamic analysis of application source code for security flaws.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Audit Types</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">External Security Audit</h3>
              <p className="text-slate-600 mb-4">Assessment of internet-facing systems and applications from an external attacker's perspective.</p>
              <ul className="space-y-1 text-slate-600 text-sm">
                <li>• Network penetration testing</li>
                <li>• Web application security testing</li>
                <li>• Social engineering assessment</li>
                <li>• OSINT reconnaissance</li>
              </ul>
            </div>
            <div className="service-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Internal Security Audit</h3>
              <p className="text-slate-600 mb-4">Evaluation of internal network security and potential privilege escalation paths.</p>
              <ul className="space-y-1 text-slate-600 text-sm">
                <li>• Internal network penetration</li>
                <li>• Active Directory assessment</li>
                <li>• Privilege escalation testing</li>
                <li>• Lateral movement analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="service-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Strengthen Your Defenses</h2>
            <p className="text-slate-600 mb-8">
              Identify vulnerabilities before attackers do with our comprehensive security audit services.
            </p>
            <Link href="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Schedule Security Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

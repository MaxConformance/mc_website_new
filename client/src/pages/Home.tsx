import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, Settings, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
            alt="Cybersecurity hero banner with digital security visualization" 
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">
              Secure. Compliant. Confident.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
            Leading cybersecurity GRC solutions that protect your business, ensure compliance, and drive growth through intelligent risk management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product">
              <Button className="btn-primary px-8 py-4 text-lg font-semibold">
                Explore Our Platform
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="glass px-8 py-4 text-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose CyberGRC?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine deep cybersecurity expertise with cutting-edge technology to deliver comprehensive GRC solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card p-8 rounded-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Expert Guidance</h3>
              <p className="text-slate-300 text-center">
                Industry-leading cybersecurity professionals with decades of combined experience in GRC frameworks.
              </p>
            </div>
            <div className="service-card p-8 rounded-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Integrated Platform</h3>
              <p className="text-slate-300 text-center">
                Unified GRC platform that streamlines governance, risk management, and compliance processes.
              </p>
            </div>
            <div className="service-card p-8 rounded-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Proven Results</h3>
              <p className="text-slate-300 text-center">
                Track record of helping organizations achieve and maintain compliance while reducing cyber risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRC Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office technology with multiple monitors showing security dashboards" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="gradient-text">GRC Approach</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                We believe in a holistic approach to cybersecurity governance, risk management, and compliance that adapts to your business needs and scales with your growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Risk-Based Framework</h4>
                    <p className="text-slate-300">Prioritize resources based on actual risk exposure and business impact.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Continuous Monitoring</h4>
                    <p className="text-slate-300">Real-time visibility into your security posture and compliance status.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Automated Workflows</h4>
                    <p className="text-slate-300">Streamline processes with intelligent automation and reporting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

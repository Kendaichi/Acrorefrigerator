import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Search, PenTool, Hammer, HardHat, CheckCircle } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

const steps = [
  { icon: MessageSquare, num: "01", title: "Consultation", desc: "We start with a detailed conversation about your business needs, compliance requirements, budget and timeline. No obligation." },
  { icon: Search, num: "02", title: "Site Inspection", desc: "Our engineers visit your site to assess available space, power supply, access points and any structural considerations." },
  { icon: PenTool, num: "03", title: "Engineering & Design", desc: "We create detailed CAD drawings, perform thermal load calculations, and specify all components for your approval." },
  { icon: Hammer, num: "04", title: "Fabrication", desc: "Panels, frames, and components are precision-manufactured in our workshop to exact specifications." },
  { icon: HardHat, num: "05", title: "Installation", desc: "Our certified installation team fits out your cold room with minimal disruption to your operations." },
  { icon: CheckCircle, num: "06", title: "Certification & Handover", desc: "We commission the system, run compliance testing, and hand over full documentation including maintenance guides." },
];

const Process = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Our Process</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">How We Deliver Your Project</h1>
          <p className="text-lg text-muted-foreground">A transparent, structured process that keeps you informed at every stage.</p>
        </div>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={s.num} className="grid md:grid-cols-[80px_1fr] gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center text-primary-foreground font-extrabold text-lg shadow-lg shadow-primary/20">
                {s.num}
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <s.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/contact">Start Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default Process;

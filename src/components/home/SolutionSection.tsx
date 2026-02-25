import { ClipboardList, Wrench, Settings } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { icon: ClipboardList, step: "01", title: "Plan", desc: "We audit your site, analyse your needs, and engineer a solution tailored to your operation and compliance requirements." },
  { icon: Wrench, step: "02", title: "Build", desc: "Our in-house team fabricates and installs your cold room with premium-grade panels, compressors and smart controls." },
  { icon: Settings, step: "03", title: "Maintain", desc: "Preventative maintenance plans and 24/7 emergency support keep your system running at peak performance." },
];

const SolutionSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <ScrollReveal className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          How We Work
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Cold Room Build System</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          One expert team. One accountable process. From design to certification.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 150}>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover-lift h-full group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-4xl font-extrabold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">{s.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;

import { AlertTriangle, ThermometerSnowflake, Ban, TrendingDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const problems = [
  { icon: AlertTriangle, title: "Compliance Failures", desc: "Non-compliant cold rooms risk health inspector shutdowns and costly fines." },
  { icon: ThermometerSnowflake, title: "Temperature Breakdowns", desc: "Poor design causes uneven cooling, leading to spoiled stock and revenue loss." },
  { icon: Ban, title: "Unreliable Contractors", desc: "Fragmented teams mean finger-pointing when something goes wrong." },
  { icon: TrendingDown, title: "Energy Waste", desc: "Inefficient systems can cost thousands extra per year in electricity bills." },
];

const ProblemSection = () => (
  <section className="dark-section section-padding">
    <div className="container-narrow">
      <ScrollReveal className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          The Real Cost of a Poorly Designed Cold Room
        </h2>
        <p className="text-dark-foreground/60 text-lg max-w-2xl mx-auto">
          Every year, Australian businesses lose thousands to avoidable refrigeration problems.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {problems.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 100}>
            <div className="bg-dark-foreground/5 rounded-2xl p-6 border border-dark-foreground/10 hover-lift h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-dark-foreground/60 leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;

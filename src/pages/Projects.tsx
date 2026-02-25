import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/home/CTABanner";
import heroImg from "@/assets/hero-coldroom.jpg";

const projects = [
  { title: "FreshMart Distribution Centre", type: "Supermarket & Logistics", size: "200 sqm cold storage", desc: "Multi-temperature cold storage facility with smart monitoring and dock-level integration for Australia's fastest-growing supermarket chain." },
  { title: "Harbour Kitchen", type: "Restaurant & Hospitality", size: "45 sqm coolroom", desc: "HACCP-compliant walk-in coolroom and freezer room for a high-volume waterfront restaurant serving 500+ covers per day." },
  { title: "PharmaLogix Sydney", type: "Pharmaceutical", size: "120 sqm controlled storage", desc: "TGA-compliant pharmaceutical cold storage with redundant monitoring, backup power systems and full audit trail integration." },
  { title: "Aussie Meats Processing", type: "Food Production", size: "300 sqm blast freezer", desc: "High-capacity blast freezing facility with processing rooms designed for continuous 24/7 operation." },
  { title: "GreenGrocer Co-op", type: "Retail", size: "80 sqm multi-temp", desc: "Retail cold room with three independent temperature zones for fresh produce, dairy and frozen goods." },
  { title: "ColdChain Logistics", type: "Warehousing", size: "500 sqm warehouse", desc: "Large-scale cold storage warehouse with automated temperature management and integration with warehouse management systems." },
];

const Projects = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Our Work</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Featured Projects</h1>
          <p className="text-lg text-muted-foreground">A selection of commercial refrigeration projects delivered across Australia.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img src={heroImg} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{p.type}</span>
                  <span className="text-xs text-muted-foreground">{p.size}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/contact">Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default Projects;

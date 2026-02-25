import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { UtensilsCrossed, ShoppingCart, Pill, Warehouse, Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/home/CTABanner";

const industries = [
  { icon: UtensilsCrossed, title: "Restaurants & Hospitality", desc: "Walk-in coolrooms, freezer rooms, and bar refrigeration designed for the demands of commercial kitchens. HACCP-compliant systems that keep your kitchen inspection-ready.", features: ["Walk-in coolrooms", "Blast chillers", "Bar fridges", "HACCP compliance"] },
  { icon: ShoppingCart, title: "Supermarkets & Retail", desc: "Multi-temperature display cases, cold rooms, and energy-efficient refrigeration systems for retail environments. Maximise product visibility while minimising energy costs.", features: ["Display cases", "Multi-temp zones", "Night blinds", "Energy management"] },
  { icon: Pill, title: "Pharmaceuticals & Healthcare", desc: "Precision temperature-controlled storage for vaccines, medicines, and biological materials. Meets TGA and cold chain requirements with redundant monitoring systems.", features: ["Vaccine storage", "TGA compliance", "Redundant systems", "Audit trails"] },
  { icon: Warehouse, title: "Warehousing & Logistics", desc: "Large-scale cold storage solutions for distribution centres and logistics hubs. Designed for high-throughput operations with dock-level integration.", features: ["Dock integration", "Pallet racking", "Rapid cycling", "Scale flexibility"] },
  { icon: Factory, title: "Food Production & Manufacturing", desc: "Processing rooms, blast freezers, and production-line refrigeration for food manufacturers. Engineered for continuous operation and regulatory compliance.", features: ["Blast freezing", "Processing rooms", "Clean rooms", "Continuous ops"] },
];

const Industries = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Industries</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Refrigeration for Every Industry</h1>
          <p className="text-lg text-muted-foreground">Specialised cold storage solutions tailored to the unique requirements of your sector.</p>
        </div>
        <div className="space-y-8">
          {industries.map((ind, i) => (
            <div key={ind.title} className={`grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl border border-border shadow-sm p-8 md:p-12 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <ind.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-extrabold mb-3">{ind.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{ind.desc}</p>
                <Button asChild>
                  <Link to="/contact">Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {ind.features.map((f) => (
                  <div key={f} className="bg-secondary rounded-xl px-4 py-3 text-sm font-medium text-center">{f}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default Industries;

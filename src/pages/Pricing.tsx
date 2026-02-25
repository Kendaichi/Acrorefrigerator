import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";

const tiers = [
  {
    name: "Standard Cold Room",
    desc: "Ideal for restaurants and small retail businesses.",
    price: "From $15,000",
    features: ["Up to 30 sqm", "Single temperature zone", "Standard insulation panels", "Basic controller", "1 year warranty", "Installation included"],
  },
  {
    name: "Commercial System",
    desc: "For supermarkets, warehouses and food production.",
    price: "From $45,000",
    features: ["Up to 200 sqm", "Multi-temperature zones", "High-density insulation", "Smart monitoring", "3 year warranty", "Compliance certification"],
    popular: true,
  },
  {
    name: "Enterprise Solution",
    desc: "Custom-engineered for large-scale operations.",
    price: "Custom Quote",
    features: ["Unlimited scale", "Full system design", "Redundant systems", "24/7 monitoring", "5 year warranty", "Maintenance contract"],
  },
];

const Pricing = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Pricing</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground">Every project is unique. These guides give you a starting point — get a custom quote for accurate pricing.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`bg-card rounded-2xl p-8 border shadow-sm relative ${t.popular ? "border-primary shadow-md" : "border-border"}`}>
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-cta text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-bold text-xl mb-2">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
              <div className="text-3xl font-extrabold mb-6">{t.price}</div>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" variant={t.popular ? "default" : "outline"}>
                <Link to="/contact">Get a Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
    <FAQSection />
  </Layout>
);

export default Pricing;

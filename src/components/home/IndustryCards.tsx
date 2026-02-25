import { Link } from "react-router-dom";
import { UtensilsCrossed, ShoppingCart, Pill, Warehouse, Factory, ArrowRight } from "lucide-react";

const industries = [
  { icon: UtensilsCrossed, title: "Restaurants & Hospitality", desc: "Walk-in coolrooms and freezers built for commercial kitchens." },
  { icon: ShoppingCart, title: "Supermarkets & Retail", desc: "Display cases, cold rooms and multi-temperature zones." },
  { icon: Pill, title: "Pharmaceuticals", desc: "Temperature-critical storage for vaccines and medicines." },
  { icon: Warehouse, title: "Warehousing & Logistics", desc: "Large-scale cold storage for distribution centres." },
  { icon: Factory, title: "Food Production", desc: "Processing and blast freezing rooms for manufacturers." },
];

const IndustryCards = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Industries We Serve</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tailored refrigeration solutions for every sector.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind) => (
          <Link
            key={ind.title}
            to="/industries"
            className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all group hover:border-primary/20"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <ind.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold mb-2">{ind.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.desc}</p>
            <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryCards;

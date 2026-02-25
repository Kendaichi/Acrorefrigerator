import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake, Wrench, ShieldCheck, Thermometer, Clock, BarChart3 } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";
import equipmentImg from "@/assets/equipment.jpg";

const services = [
  { icon: Snowflake, title: "Cold Room Construction", desc: "Custom-built cold rooms and freezer rooms engineered to your exact specifications. From walk-in coolrooms to large-scale cold storage." },
  { icon: Wrench, title: "Refrigeration Systems", desc: "Complete commercial refrigeration system design and installation including compressors, condensers, evaporators and controls." },
  { icon: ShieldCheck, title: "Compliance & Certification", desc: "Full HACCP compliance auditing, documentation and certification for food safety and pharmaceutical storage requirements." },
  { icon: Thermometer, title: "Smart Monitoring", desc: "IoT-enabled temperature monitoring with cloud dashboards, automated alerts and compliance logging." },
  { icon: Clock, title: "24/7 Emergency Repairs", desc: "Round-the-clock emergency breakdown service with rapid response times across greater Sydney and regional NSW." },
  { icon: BarChart3, title: "Energy Audits & Upgrades", desc: "Comprehensive energy efficiency assessments and system upgrades that reduce running costs by up to 30%." },
];

const Services = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Commercial Refrigeration Services</h1>
          <p className="text-lg text-muted-foreground">End-to-end refrigeration solutions for Australian businesses. From design and construction to ongoing maintenance and compliance.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary">
                <Link to="/contact">Learn More <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Premium Equipment & Materials</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We only use commercial-grade equipment from trusted manufacturers. Every component is selected for reliability, efficiency and longevity.</p>
            <p className="text-muted-foreground leading-relaxed">Our panel systems feature high-density polyurethane insulation with food-grade stainless steel or colorbond finishes — built to withstand decades of commercial use.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={equipmentImg} alt="Commercial refrigeration equipment" className="w-full h-[350px] object-cover" />
          </div>
        </div>
      </div>
    </section>
    <CTABanner />
    <FAQSection />
  </Layout>
);

export default Services;

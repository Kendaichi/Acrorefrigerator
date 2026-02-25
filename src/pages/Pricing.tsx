import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";
import { motion, Variants } from "framer-motion";

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.12 },
  }),
};

const Pricing = () => (
  <Layout>
    <SEO
      title="Commercial Refrigeration Pricing"
      description="Transparent pricing for commercial cold rooms and refrigeration systems. Standard cold rooms from $15,000. Get a custom quote for your project."
      canonical="/pricing"
    />
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Pricing</motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">Transparent Pricing</motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">Every project is unique. These guides give you a starting point — get a custom quote for accurate pricing.</motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`bg-card rounded-2xl p-8 border shadow-sm relative ${t.popular ? "border-primary shadow-md" : "border-border"}`}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
    <FAQSection />
  </Layout>
);

export default Pricing;

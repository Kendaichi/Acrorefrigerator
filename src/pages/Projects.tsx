import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/home/CTABanner";
import heroImg from "@/assets/hero-coldroom.jpg";
import { motion, Variants } from "framer-motion";

const projects = [
  { title: "FreshMart Distribution Centre", type: "Supermarket & Logistics", size: "200 sqm cold storage", desc: "Multi-temperature cold storage facility with smart monitoring and dock-level integration for Australia's fastest-growing supermarket chain." },
  { title: "Harbour Kitchen", type: "Restaurant & Hospitality", size: "45 sqm coolroom", desc: "HACCP-compliant walk-in coolroom and freezer room for a high-volume waterfront restaurant serving 500+ covers per day." },
  { title: "PharmaLogix Sydney", type: "Pharmaceutical", size: "120 sqm controlled storage", desc: "TGA-compliant pharmaceutical cold storage with redundant monitoring, backup power systems and full audit trail integration." },
  { title: "Aussie Meats Processing", type: "Food Production", size: "300 sqm blast freezer", desc: "High-capacity blast freezing facility with processing rooms designed for continuous 24/7 operation." },
  { title: "GreenGrocer Co-op", type: "Retail", size: "80 sqm multi-temp", desc: "Retail cold room with three independent temperature zones for fresh produce, dairy and frozen goods." },
  { title: "ColdChain Logistics", type: "Warehousing", size: "500 sqm warehouse", desc: "Large-scale cold storage warehouse with automated temperature management and integration with warehouse management systems." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const Projects = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Our Work</motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">Featured Projects</motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">A selection of commercial refrigeration projects delivered across Australia.</motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden group"
            >
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
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/contact">Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default Projects;

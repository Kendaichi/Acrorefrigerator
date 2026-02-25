import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake, Wrench, ShieldCheck, Thermometer, Clock, BarChart3 } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";
import equipmentImg from "@/assets/equipment.jpg";
import { motion, Variants } from "framer-motion";

const services = [
  { icon: Snowflake, title: "Cold Room Construction", desc: "Custom-built cold rooms and freezer rooms engineered to your exact specifications. From walk-in coolrooms to large-scale cold storage." },
  { icon: Wrench, title: "Refrigeration Systems", desc: "Complete commercial refrigeration system design and installation including compressors, condensers, evaporators and controls." },
  { icon: ShieldCheck, title: "Compliance & Certification", desc: "Full HACCP compliance auditing, documentation and certification for food safety and pharmaceutical storage requirements." },
  { icon: Thermometer, title: "Smart Monitoring", desc: "IoT-enabled temperature monitoring with cloud dashboards, automated alerts and compliance logging." },
  { icon: Clock, title: "24/7 Emergency Repairs", desc: "Round-the-clock emergency breakdown service with rapid response times across greater Sydney and regional NSW." },
  { icon: BarChart3, title: "Energy Audits & Upgrades", desc: "Comprehensive energy efficiency assessments and system upgrades that reduce running costs by up to 30%." },
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

const Services = () => (
  <Layout>
    <SEO
      title="Commercial Refrigeration Services"
      description="End-to-end commercial refrigeration services including cold room construction, system installation, HACCP compliance, smart monitoring and 24/7 emergency repairs across Sydney & NSW."
      canonical="/services"
    />
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Our Services
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">Commercial Refrigeration Services</motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">End-to-end refrigeration solutions for Australian businesses. From design and construction to ongoing maintenance and compliance.</motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary">
                <Link to="/contact">Learn More <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold mb-4">Premium Equipment & Materials</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We only use commercial-grade equipment from trusted manufacturers. Every component is selected for reliability, efficiency and longevity.</p>
            <p className="text-muted-foreground leading-relaxed">Our panel systems feature high-density polyurethane insulation with food-grade stainless steel or colorbond finishes — built to withstand decades of commercial use.</p>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={equipmentImg} alt="Commercial refrigeration equipment" className="w-full h-[350px] object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
    <CTABanner />
    <FAQSection />
  </Layout>
);

export default Services;

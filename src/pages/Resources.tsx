import Layout from "@/components/Layout";
import { ArrowRight, BookOpen, FileText, Video } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import { motion, Variants } from "framer-motion";

const articles = [
  { type: "Guide", icon: BookOpen, title: "The Complete Guide to HACCP-Compliant Cold Rooms", desc: "Everything you need to know about building a cold room that passes food safety inspections.", date: "Feb 2026" },
  { type: "Article", icon: FileText, title: "How to Reduce Commercial Refrigeration Energy Costs by 30%", desc: "Practical strategies for cutting energy consumption without compromising performance.", date: "Jan 2026" },
  { type: "Case Study", icon: FileText, title: "FreshMart: 200sqm Multi-Temperature Cold Storage", desc: "How we delivered a complex multi-zone facility two weeks ahead of schedule.", date: "Dec 2025" },
  { type: "Guide", icon: BookOpen, title: "Choosing the Right Insulation for Your Cold Room", desc: "A comparison of panel types, R-values, and cost implications for commercial applications.", date: "Nov 2025" },
  { type: "Video", icon: Video, title: "Cold Room Maintenance: What to Check Monthly", desc: "A walkthrough of essential monthly maintenance tasks to prevent costly breakdowns.", date: "Oct 2025" },
  { type: "Article", icon: FileText, title: "Smart Monitoring Systems: ROI for Commercial Refrigeration", desc: "How IoT monitoring pays for itself within the first year of operation.", date: "Sep 2025" },
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

const Resources = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Resources</motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">Guides, Articles & Insights</motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">Expert knowledge to help you make informed decisions about commercial refrigeration.</motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full flex items-center gap-1">
                  <a.icon className="w-3 h-3" /> {a.type}
                </span>
                <span className="text-xs text-muted-foreground">{a.date}</span>
              </div>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.desc}</p>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
  </Layout>
);

export default Resources;

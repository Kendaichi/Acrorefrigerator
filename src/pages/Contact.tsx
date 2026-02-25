import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a
        href="tel:1300000000"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        1300 227 600
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a
        href="mailto:info@acrorefrigeration.com.au"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        info@acrorefrigeration.com.au
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Location",
    content: <p className="text-muted-foreground">Sydney, NSW Australia</p>,
  },
  {
    icon: Clock,
    label: "Business Hours",
    content: (
      <>
        <p className="text-muted-foreground">Mon–Fri: 7am – 5pm AEST</p>
        <p className="text-sm text-muted-foreground">
          24/7 Emergency Service Available
        </p>
      </>
    ),
  },
];

const Contact = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4"
            >
              Contact Us
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold mb-6"
            >
              Let's Discuss Your Project
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground mb-10"
            >
              Get a free consultation and custom quote. Our team typically
              responds within 2 business hours.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6">
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={slideLeft}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <h2 className="text-xl font-bold mb-6">Request a Quote</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Last Name
                  </label>
                  <Input placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Phone
                </label>
                <Input type="tel" placeholder="04XX XXX XXX" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Company
                </label>
                <Input placeholder="Your business name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Project Details
                </label>
                <Textarea
                  placeholder="Tell us about your refrigeration needs, timeline and any specific requirements."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit Enquiry
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We'll respond within 2 business hours. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;

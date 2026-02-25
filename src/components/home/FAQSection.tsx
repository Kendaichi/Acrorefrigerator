import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "How long does a commercial cold room installation take?", a: "Most installations are completed within 2–4 weeks depending on size and complexity. Our project managers provide a detailed timeline during the consultation phase." },
  { q: "Are your cold rooms HACCP compliant?", a: "Yes. Every cold room we build is designed to meet HACCP, food safety, and relevant Australian standards. We provide full compliance documentation upon handover." },
  { q: "Do you offer maintenance contracts?", a: "Absolutely. We offer preventative maintenance plans that include scheduled servicing, 24/7 emergency support, and remote monitoring to keep your system running optimally." },
  { q: "What areas of Australia do you service?", a: "We service the greater Sydney metropolitan area and regional NSW. For large-scale projects, we can mobilise teams nationally." },
  { q: "Can you retrofit or expand an existing cold room?", a: "Yes. Our modular systems are designed for easy expansion. We can also retrofit existing cold rooms with upgraded insulation, compressors, and smart monitoring." },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow max-w-3xl">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg">Common questions about our refrigeration services.</p>
      </ScrollReveal>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-semibold text-sm py-5 hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">{faq.a}</AccordionContent>
            </AccordionItem>
          </ScrollReveal>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

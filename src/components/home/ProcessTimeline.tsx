const steps = [
  { num: "1", title: "Consultation", desc: "Understand your requirements and business goals." },
  { num: "2", title: "Site Inspection", desc: "On-site assessment of space, power, and access." },
  { num: "3", title: "Engineering", desc: "Custom CAD design and load calculations." },
  { num: "4", title: "Fabrication", desc: "Precision manufacturing of panels and components." },
  { num: "5", title: "Installation", desc: "Professional fit-out by our certified team." },
  { num: "6", title: "Certification", desc: "Compliance testing and handover documentation." },
];

const ProcessTimeline = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our 6-Step Process</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A proven methodology that delivers on time, on budget, and to spec.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {steps.map((s, i) => (
          <div key={s.num} className="text-center group">
            <div className="w-14 h-14 rounded-2xl gradient-cta flex items-center justify-center mx-auto mb-4 text-primary-foreground font-extrabold text-lg shadow-lg shadow-primary/20">
              {s.num}
            </div>
            <h3 className="font-bold text-sm mb-1">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-7 right-0 w-full h-px bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessTimeline;

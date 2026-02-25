import { ShieldCheck, Zap, Wifi, Expand, Bell, Wrench } from "lucide-react";

const capabilities = [
  { icon: ShieldCheck, title: "Compliance Ready Design", desc: "Engineered to meet HACCP, food safety, and Australian building standards." },
  { icon: Zap, title: "Energy Efficient Panels", desc: "High-density insulation panels that slash running costs by up to 30%." },
  { icon: Wifi, title: "Smart Monitoring", desc: "Real-time temperature and humidity monitoring via cloud dashboards." },
  { icon: Expand, title: "Modular Expansion", desc: "Systems designed to grow with your business — add capacity without rebuilding." },
  { icon: Bell, title: "Remote Alerts", desc: "Instant SMS and email alerts if temperatures deviate from set ranges." },
  { icon: Wrench, title: "Preventative Maintenance", desc: "Scheduled servicing that prevents breakdowns before they happen." },
];

const CapabilitiesGrid = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Built-In Capabilities</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Every Acro cold room comes standard with features that protect your investment.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((c) => (
          <div key={c.title} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <c.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesGrid;

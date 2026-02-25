import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-coldroom.jpg";

const stats = [
  { value: "50+", label: "Years Experience" },
  { value: "2,500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Emergency Support" },
  { value: "30%", label: "Energy Savings" },
  { value: "100%", label: "HACCP Compliance" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % stats.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Show 3 stats at a time
  const visibleStats = [
    stats[activeIndex % stats.length],
    stats[(activeIndex + 1) % stats.length],
    stats[(activeIndex + 2) % stats.length],
  ];

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl" style={{ animation: "fade-in 0.7s ease-out" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 hover-scale cursor-default">
              Australia's Trusted Refrigeration Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Commercial Cold Rooms Built for{" "}
              <span className="text-primary">Compliance</span> & Reliability
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Design, installation and certification handled by one expert team. HACCP-compliant systems built to last.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="text-base px-8 hover-scale">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 hover-scale">
                <Link to="/contact">
                  <Calendar className="w-4 h-4 mr-2" /> Book Site Inspection
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative" style={{ animation: "fade-in 0.7s ease-out 0.2s both" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5 hover-lift">
              <img
                src={heroImg}
                alt="Commercial cold room installation by Acro Refrigeration"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Rotating stats ticker */}
            <div className="absolute -bottom-8 left-4 right-4 md:-bottom-6 md:left-6 md:right-6">
              <div className="bg-card rounded-xl shadow-xl border border-border p-4 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-4 divide-x divide-border">
                  {visibleStats.map((stat, i) => (
                    <div
                      key={`${stat.label}-${activeIndex}`}
                      className="text-center px-2"
                      style={{
                        animation: isAnimating
                          ? "none"
                          : `slide-up 0.4s ease-out ${i * 100}ms both`,
                      }}
                    >
                      <div className="text-2xl md:text-3xl font-extrabold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground font-medium mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

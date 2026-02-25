import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-coldroom.jpg";

const Hero = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
            Australia's Trusted Refrigeration Experts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Commercial Cold Rooms Built for Compliance & Reliability
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            Design, installation and certification handled by one expert team. HACCP-compliant systems built to last.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/contact">
                Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/contact">
                <Calendar className="w-4 h-4 mr-2" /> Book Site Inspection
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5">
            <img
              src={heroImg}
              alt="Commercial cold room installation by Acro Refrigeration"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border hidden md:block">
            <div className="text-3xl font-extrabold text-primary">50+</div>
            <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

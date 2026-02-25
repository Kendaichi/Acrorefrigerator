import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTABanner = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="gradient-cta rounded-3xl p-12 md:p-16 text-center text-primary-foreground hover-lift">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Ready to Build Your Cold Room?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Get a free consultation and custom quote for your commercial refrigeration project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-base px-8 font-semibold hover-scale">
              <Link to="/contact">
                Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover-scale">
              <a href="tel:1300000000">
                <Phone className="w-4 h-4 mr-2" /> Call 1300 000 000
              </a>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABanner;

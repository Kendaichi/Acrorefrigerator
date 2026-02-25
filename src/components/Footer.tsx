import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark text-dark-foreground">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-xl mb-4">
            <div className="w-8 h-8 rounded-lg gradient-cta flex items-center justify-center text-primary-foreground text-sm font-black">A</div>
            Acro Refrigeration
          </div>
          <p className="text-dark-foreground/60 text-sm leading-relaxed mb-6">
            Australia's trusted commercial refrigeration contractor since 1972. Design, installation and certification — all under one roof.
          </p>
          <div className="flex flex-col gap-3 text-sm text-dark-foreground/60">
            <a href="tel:1300000000" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="w-4 h-4" /> 1300 000 000</a>
            <a href="mailto:info@acrorefrigeration.com.au" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="w-4 h-4" /> info@acrorefrigeration.com.au</a>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Sydney, NSW Australia</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-dark-foreground/40">Services</h4>
          <ul className="space-y-2.5 text-sm text-dark-foreground/60">
            <li><Link to="/services" className="hover:text-primary transition-colors">Cold Room Construction</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Refrigeration Systems</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Preventative Maintenance</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">24/7 Emergency Repairs</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Energy Audits</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-dark-foreground/40">Industries</h4>
          <ul className="space-y-2.5 text-sm text-dark-foreground/60">
            <li><Link to="/industries" className="hover:text-primary transition-colors">Restaurants & Hospitality</Link></li>
            <li><Link to="/industries" className="hover:text-primary transition-colors">Supermarkets</Link></li>
            <li><Link to="/industries" className="hover:text-primary transition-colors">Pharmaceuticals</Link></li>
            <li><Link to="/industries" className="hover:text-primary transition-colors">Warehousing</Link></li>
            <li><Link to="/industries" className="hover:text-primary transition-colors">Food Production</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-dark-foreground/40">Company</h4>
          <ul className="space-y-2.5 text-sm text-dark-foreground/60">
            <li><Link to="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-foreground/40">
        <p>© {new Date().getFullYear()} Acro Refrigeration. All rights reserved. ABN 00 000 000 000</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

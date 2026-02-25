import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Contact Us</div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Let's Discuss Your Project</h1>
            <p className="text-lg text-muted-foreground mb-10">
              Get a free consultation and custom quote. Our team typically responds within 2 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary" /></div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:1300000000" className="text-muted-foreground hover:text-primary transition-colors">1300 000 000</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:info@acrorefrigeration.com.au" className="text-muted-foreground hover:text-primary transition-colors">info@acrorefrigeration.com.au</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <p className="text-muted-foreground">Sydney, NSW Australia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                <div>
                  <div className="font-semibold mb-1">Business Hours</div>
                  <p className="text-muted-foreground">Mon–Fri: 7am – 5pm AEST</p>
                  <p className="text-sm text-muted-foreground">24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h2 className="text-xl font-bold mb-6">Request a Quote</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                  <Input placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone</label>
                <Input type="tel" placeholder="04XX XXX XXX" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Company</label>
                <Input placeholder="Your business name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Project Details</label>
                <Textarea placeholder="Tell us about your refrigeration needs, timeline and any specific requirements." rows={4} />
              </div>
              <Button type="submit" className="w-full" size="lg">Submit Enquiry</Button>
              <p className="text-xs text-muted-foreground text-center">We'll respond within 2 business hours. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;

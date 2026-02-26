import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import CapabilitiesGrid from "@/components/home/CapabilitiesGrid";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import IndustryCards from "@/components/home/IndustryCards";
import Testimonials from "@/components/home/Testimonials";
import ClientsSection from "@/components/home/ClientsSection";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";
import SEO from "@/components/SEO";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Acro Refrigeration",
  "description": "Australia's trusted commercial refrigeration contractor. 24/7 emergency repairs, preventative maintenance plans and custom cold room builds. HACCP-certified.",
  "url": "https://acrorefrigeration.com.au",
  "telephone": "1300227600",
  "email": "info@acrorefrigeration.com.au",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brisbane",
    "addressRegion": "QLD",
    "addressCountry": "AU"
  },
  "openingHours": "Mo-Fr 07:00-17:00",
  "areaServed": ["Brisbane", "Gold Coast", "Sunshine Coast", "SE Queensland", "Australia"],
  "priceRange": "$$"
};

const Index = () => (
  <Layout>
    <SEO
      title="Commercial Refrigeration Repair & Maintenance Brisbane"
      description="24/7 emergency repairs, preventative maintenance plans and cold room builds for commercial refrigeration systems. Fast response, HACCP-certified. Serving Brisbane & SE Queensland."
      canonical="/"
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
    <Hero />
    <TrustBar />
    <ProblemSection />
    <SolutionSection />
    <CapabilitiesGrid />
    <ProcessTimeline />
    <IndustryCards />
    <Testimonials />
    <ClientsSection />
    <CTABanner />
    <FAQSection />
  </Layout>
);

export default Index;

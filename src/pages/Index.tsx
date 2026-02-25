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
  "description": "Australia's trusted commercial refrigeration contractor. Custom cold room design, installation and HACCP certification.",
  "url": "https://acrorefrigeration.com.au",
  "telephone": "1300227600",
  "email": "info@acrorefrigeration.com.au",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "openingHours": "Mo-Fr 07:00-17:00",
  "areaServed": ["Sydney", "NSW", "Australia"],
  "priceRange": "$$"
};

const Index = () => (
  <Layout>
    <SEO
      title="Commercial Cold Room Construction Sydney"
      description="Australia's trusted commercial refrigeration contractor. Custom cold room design, installation and HACCP certification. Serving Sydney & NSW since 1972."
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

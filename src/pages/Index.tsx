import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import CapabilitiesGrid from "@/components/home/CapabilitiesGrid";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import IndustryCards from "@/components/home/IndustryCards";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import FAQSection from "@/components/home/FAQSection";

const Index = () => (
  <Layout>
    <Hero />
    <TrustBar />
    <ProblemSection />
    <SolutionSection />
    <CapabilitiesGrid />
    <ProcessTimeline />
    <IndustryCards />
    <Testimonials />
    <CTABanner />
    <FAQSection />
  </Layout>
);

export default Index;

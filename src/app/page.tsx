import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AIGovernance } from "@/components/AIGovernance";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Services />
      <AIGovernance />

      <div id="principles">
        <SectionTitle
          preTitle="Our Principle"
          title="Accountability by Design"
        >
          Consequences are considered before the action, not reconstructed
          after the incident. Every engagement — a readiness verdict, a
          governance architecture, a leadership program — holds that line.
        </SectionTitle>
      </div>

      <div id="faq">
        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          About working with TuvisMinds and the frameworks behind our AI
          strategy and governance practice.
        </SectionTitle>
      </div>

      <Faq />
      <Cta />
    </Container>
  );
}

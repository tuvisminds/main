import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { AIGovernance } from "@/components/AIGovernance";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <Brands />
      <AIGovernance />

      <div id="principles">
        <SectionTitle
          preTitle="Our Principles"
          title="One Standard: Accountability by Design"
        >
          Whether the product is a handcrafted gift or a framework for enterprise
          AI, we hold the same line — consequences are considered before the
          action, and the people affected are part of the design.
        </SectionTitle>
      </div>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <div id="faq">
        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          About TuvisMinds, working with Saavi, and the frameworks behind our AI
          governance practice.
        </SectionTitle>
      </div>

      <Faq />
      <Cta />
    </Container>
  );
}

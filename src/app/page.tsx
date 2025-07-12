import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Growth Principles"
        title="Why Growth Mindset Matters"
      >
        Growth mindset is the foundation of all meaningful progress. It's the belief that abilities and intelligence can be developed through dedication, hard work, and learning from failure.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Growth in Action"
        title="See How Growth Mindset Transforms Organizations"
      >
        Discover how embracing challenges, learning from failures, and maintaining curiosity can revolutionize your approach to business and personal development.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Growth Stories"
        title="What Growth Mindset Achieves"
      >
        Hear from individuals and organizations who have embraced growth mindset principles and transformed their approach to challenges, learning, and success.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "About — TuvisMinds",
  description:
    "TuvisMinds is the AI strategy and governance practice of Shrinivas Kulkarni — 26 years in enterprise technology, Stanford LEAD alumnus and visiting faculty.",
};

const credentials = [
  "26 years in enterprise technology — building, running and being accountable for systems at scale",
  "Business Head for AI — the practitioner's seat, not the commentator's",
  "Stanford LEAD alumnus; MBA in Strategy",
  "Visiting faculty at Symbiosis, teaching the next generation of technology leaders",
  "Author of the Grounded readiness framework and the Operational Authority Layer",
];

export default function AboutPage() {
  return (
    <Container>
      <SectionTitle preTitle="About" title="Evidence Over Hype, By Design">
        TuvisMinds exists because enterprise AI decisions deserve better than
        the news cycle. We bring the discipline of 26 years of enterprise
        technology to the question every board is now facing: what should AI be
        allowed to do here, and is this investment ready to succeed?
      </SectionTitle>

      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Shrinivas Kulkarni
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              TuvisMinds is the AI strategy and governance practice of
              Shrinivas Kulkarni. The positions we take are grounded in decades
              of accountability for enterprise systems — which is why our
              governance work starts from structure, not sentiment: define what
              an AI system is permitted to do before it acts, and test whether
              an organization is ready before its capital is committed.
            </p>
            <ul className="space-y-3 mb-6">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircleIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-tuvis-teal dark:text-tuvis-cyan" />
                  <span className="text-gray-600 dark:text-gray-400">{c}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://shrini.tuvisminds.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline"
              >
                Read the published work <ArrowRightIcon className="w-4 h-4 ml-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/kshrinivas2000/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline"
              >
                Connect on LinkedIn <ArrowRightIcon className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="p-8 lg:p-10 bg-gray-50 dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              How We Work
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We take a small number of engagements at a time and say no to the
              rest. Every engagement starts with an honest assessment — if the
              right answer is &ldquo;don&apos;t invest yet&rdquo; or
              &ldquo;you don&apos;t need us,&rdquo; that is the advice you will
              get. The frameworks we use are published and open to challenge;
              the recommendations name specific decisions and specific owners.
            </p>
          </div>
        </div>
      </Container>

      <Cta />
    </Container>
  );
}

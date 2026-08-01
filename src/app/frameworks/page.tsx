import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";
import {
  ClipboardDocumentCheckIcon,
  LockClosedIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Frameworks — TuvisMinds | Grounded & the Operational Authority Layer",
  description:
    "The Grounded AI-readiness framework and the Operational Authority Layer — structural approaches to deciding on and governing enterprise AI.",
};

export default function FrameworksPage() {
  return (
    <Container>
      <SectionTitle preTitle="Frameworks" title="The Thinking Behind the Practice">
        Our engagements are built on published, testable frameworks — not
        proprietary black boxes. Read them, challenge them, and bring us your
        hardest case.
      </SectionTitle>

      {/* Signature quote */}
      <Container>
        <figure className="max-w-3xl mx-auto mb-4">
          <blockquote className="relative p-8 lg:p-10 bg-gradient-to-br from-minds-navy to-minds-ink rounded-2xl shadow-2xl">
            <div className="absolute top-4 left-6 text-6xl leading-none text-tuvis-cyan/40 font-serif select-none">&ldquo;</div>
            <p className="relative text-xl lg:text-2xl font-medium leading-relaxed text-white">
              An audit log is not a control. It is a record of the moment the
              control was missing.
            </p>
            <figcaption className="relative mt-4 text-sm font-semibold tracking-wide text-tuvis-leaf">
              — Shrinivas Kulkarni, on the Operational Authority Layer
            </figcaption>
          </blockquote>
        </figure>
      </Container>

      <Container>
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg">
            <div className="flex items-center gap-4 mb-5">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-tuvis-teal to-minds-navy rounded-xl shadow-lg">
                <ClipboardDocumentCheckIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Grounded — AI Investment Readiness
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              A framework for testing whether an organization is ready for the
              AI investment in front of it. Ten diagnostic blocks examine the
              foundations — data, decision rights, operating discipline,
              economics — and three non-negotiable gates must hold before
              capital is committed.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Grounded delivers a verdict, not a score: proceed, fix these
              specific things first, or do not invest. Readiness is examined
              before the money moves — not rationalized after.
            </p>
            <a
              href="https://shrini.tuvisminds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline"
            >
              Explore the framework <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg">
            <div className="flex items-center gap-4 mb-5">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-tuvis-teal to-minds-navy rounded-xl shadow-lg">
                <LockClosedIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                The Operational Authority Layer
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Your company knows exactly who is allowed to approve a £2m
              payment. It has no equivalent answer for the AI agent that just
              raised one. The Operational Authority Layer is a proposed layer of
              the enterprise stack that defines what an AI system is
              structurally permitted to do — before an action commits.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Most of what is called AI governance today is monitoring and
              reporting — a careful account of what has already happened. The
              Governance Brief argues for shifting control from reactive
              monitoring to structural permission, and sets out the five
              structural properties an authority layer requires along with a
              five-question diagnostic.
            </p>
            <a
              href="https://shrini.tuvisminds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline"
            >
              Read the Governance Brief <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg">
            <div className="flex items-center gap-4 mb-5">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-tuvis-teal to-minds-navy rounded-xl shadow-lg">
                <DocumentTextIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Point of View & Essays
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Essays on the physics of autonomous decision-making, the
              reliability gaps of probabilistic systems, the erosion of human
              judgment when routine decisions bypass review, and what enterprise
              transformation actually demands — grounded in 26 years of building
              and running enterprise technology, not the AI news cycle.
            </p>
            <a
              href="https://shrini.tuvisminds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline"
            >
              Read the essays <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </Container>

      <Cta />
    </Container>
  );
}

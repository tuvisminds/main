import React from "react";
import { Container } from "@/components/Container";
import {
  ClipboardDocumentCheckIcon,
  LockClosedIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const pillars = [
  {
    title: "Grounded — AI Readiness",
    icon: <ClipboardDocumentCheckIcon />,
    description:
      "A diagnostic framework that tests whether an organization is structurally ready for AI investment — ten blocks, three non-negotiable gates. Readiness is examined before capital is committed, not rationalized after.",
    link: "https://shrini.tuvisminds.com/",
    linkLabel: "Explore the framework",
  },
  {
    title: "The Operational Authority Layer",
    icon: <LockClosedIcon />,
    description:
      "When an AI system takes real business action, who structurally decides what it is permitted to do — and how is that enforced? The Governance Brief defines authority before action, shifting control from reactive monitoring to structural permission.",
    link: "https://shrini.tuvisminds.com/",
    linkLabel: "Read the Governance Brief",
  },
  {
    title: "Articles & Point of View",
    icon: <DocumentTextIcon />,
    description:
      "Essays on the physics of autonomous decision-making, the reliability gaps in today's AI systems, and what enterprise transformation actually demands — grounded in 26 years of building and running enterprise technology.",
    link: "https://shrini.tuvisminds.com/",
    linkLabel: "Read the essays",
  },
];

export const AIGovernance = () => {
  return (
    <section id="ai-governance" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase dark:text-tuvis-leaf">
            AI &amp; Governance
          </div>
          <h2 className="max-w-3xl mx-auto mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Governance Before the Action, Not After the Incident
          </h2>
          <p className="max-w-2xl mx-auto py-4 text-lg leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
            Most AI governance watches what a system did. Ours asks what it was
            permitted to do in the first place. That distinction — structural
            authority versus post-action monitoring — anchors everything we
            publish.
          </p>
        </div>

        {/* Signature quote */}
        <figure className="max-w-3xl mx-auto mb-16">
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

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-gradient-to-br from-tuvis-teal to-minds-navy rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(pillar.icon, { className: "w-7 h-7 text-white" })}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {pillar.title}
              </h3>
              <p className="flex-grow text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {pillar.description}
              </p>
              <a
                href={pillar.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline"
              >
                {pillar.linkLabel}
                <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

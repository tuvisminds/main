"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <div>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What does TuvisMinds do?",
    answer:
      "TuvisMinds is an AI strategy and governance practice. We help enterprises decide which AI investments are worth making, design governance that defines what AI systems are permitted to do before they act, and execute AI strategy through to production. We also deliver keynotes and AI programs for leadership teams.",
  },
  {
    question: "We're evaluating an AI investment. How can you help?",
    answer:
      "We run a readiness assessment built on the Grounded framework — ten diagnostic blocks and three non-negotiable gates, examined before capital is committed. The output is a verdict, not a score: proceed, fix these things first, or don't. It typically saves organizations from the most expensive kind of AI project — the one that was never going to work.",
  },
  {
    question: "What makes your approach to AI governance different?",
    answer:
      "Most AI governance is monitoring and reporting — a careful account of what has already happened. An audit log is not a control; it is a record of the moment the control was missing. Our Operational Authority Layer defines what an AI system is structurally permitted to do before an action commits, shifting control from reactive monitoring to structural permission.",
  },
  {
    question: "Do you also help with implementation, or only strategy?",
    answer:
      "Both. Strategy that stops at a slide deck is theatre. We stay engaged through execution — operating models, vendor and platform decisions, pilot-to-production discipline, and the change management that makes AI adoption stick.",
  },
  {
    question: "Can you speak at our event or run a program for our leadership team?",
    answer:
      "Yes. We deliver keynote speeches on AI strategy, governance and autonomous decision-making, and structured AI programs for boards and leadership teams. See the Speaking page for formats, or get in touch to discuss your audience and agenda.",
  },
  {
    question: "How do we get started?",
    answer:
      "Email kshrinivas.lead@gmail.com, use the Contact page, or the chat bubble at the bottom-right of this page. The first conversation is free — we will tell you honestly whether and how we can help.",
  },
];

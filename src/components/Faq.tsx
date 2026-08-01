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
    question: "What is TuvisMinds?",
    answer:
      "TuvisMinds is an umbrella company that houses purposeful ventures and a research practice on enterprise AI governance. Today that means Saavi, our sustainable artisan-gifting brand, and the AI & Governance work published at shrini.tuvisminds.com.",
  },
  {
    question: "How do sustainable gifting and AI governance fit together?",
    answer:
      "Both are about accountability by design. Saavi builds supply chains where communities and the environment are considered before a product ships; our governance work argues AI systems need their permissions defined before they act. Different domains, same discipline.",
  },
  {
    question: "How can my company work with Saavi for corporate gifting?",
    answer:
      "Saavi offers corporate gifting and personalized curation based on occasion, budget and recipient, with delivery across India. Visit saavi.tuvisminds.com, or reach out at saavi.gifts@gmail.com / +91 99700 66244 (WhatsApp available).",
  },
  {
    question: "What is the Grounded framework?",
    answer:
      "Grounded is a diagnostic framework that tests whether an organization is structurally ready for AI investment. It examines readiness across ten blocks with three non-negotiable gates — before capital is committed. You can explore it at shrini.tuvisminds.com.",
  },
  {
    question: "What is the Operational Authority Layer?",
    answer:
      "It is a governance construct that defines what an AI system is permitted to do before it takes action, enforced structurally rather than reconstructed from audit logs afterwards. The full Governance Brief is available at shrini.tuvisminds.com.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Use the chat bubble at the bottom-right of this page and we'll get back to you by email. For Saavi-specific enquiries, saavi.gifts@gmail.com is the fastest route.",
  },
];

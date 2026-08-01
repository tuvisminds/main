import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Contact — TuvisMinds",
  description:
    "Talk to TuvisMinds about AI strategy, readiness assessments, governance design, keynotes and leadership programs.",
};

const channels = [
  {
    icon: EnvelopeIcon,
    title: "Email",
    description:
      "The fastest route for engagement enquiries, speaking invitations and everything else. We reply personally.",
    action: {
      href: "mailto:kshrinivas.lead@gmail.com",
      label: "kshrinivas.lead@gmail.com",
      external: false,
    },
  },
  {
    icon: UserCircleIcon,
    title: "LinkedIn",
    description:
      "Connect for ongoing commentary on AI strategy and governance, or send a message to start a conversation.",
    action: {
      href: "https://www.linkedin.com/in/kshrinivas2000/",
      label: "linkedin.com/in/kshrinivas2000",
      external: true,
    },
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Quick Message",
    description:
      "In a hurry? Use the chat bubble at the bottom-right of any page on this site and we'll get back to you by email.",
    action: null,
  },
];

export default function ContactPage() {
  return (
    <Container>
      <SectionTitle preTitle="Contact" title="Start the Conversation">
        Deciding on an AI investment, designing governance, or planning a
        keynote or leadership program — the first conversation is free, direct
        and to the point.
      </SectionTitle>

      <Container>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {channels.map((c) => (
            <div
              key={c.title}
              className="flex flex-col p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg text-center items-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-gradient-to-br from-tuvis-teal to-minds-navy rounded-xl shadow-lg">
                <c.icon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {c.title}
              </h2>
              <p className="flex-grow text-gray-600 dark:text-gray-400 mb-4">
                {c.description}
              </p>
              {c.action && (
                <a
                  href={c.action.href}
                  {...(c.action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline break-all"
                >
                  {c.action.label}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 p-8 bg-gray-50 dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
            What to Expect
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tell us where you are — an investment being weighed, a governance
            gap, an event date. We&apos;ll respond within two business days with
            an honest read on whether and how we can help. If we can&apos;t,
            we&apos;ll say so.
          </p>
        </div>
      </Container>
    </Container>
  );
}

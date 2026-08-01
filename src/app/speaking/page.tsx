import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";
import {
  MicrophoneIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Speaking & Leadership Programs — TuvisMinds",
  description:
    "Keynote speeches on AI strategy and governance, and structured AI programs for boards and leadership teams.",
};

const formats = [
  {
    icon: MicrophoneIcon,
    title: "Keynote Speeches",
    description:
      "Conference keynotes and corporate events on AI strategy, governance and autonomous decision-making — evidence over hype, delivered with the authority of someone who has run enterprise technology, not just written about it.",
    topics: [
      "The Operational Authority Layer: who decides what your AI is allowed to do?",
      "Grounded: how to say no to the wrong AI investment",
      "The physics of an autonomous decision — why controlling outputs is not controlling actions",
      "What AI transformation actually demands of an enterprise",
    ],
  },
  {
    icon: AcademicCapIcon,
    title: "AI Programs for Leadership",
    description:
      "Structured programs that take boards and executive teams from AI anxiety to AI judgment — a shared vocabulary, a decision framework, and the confidence to govern what they approve.",
    topics: [
      "Board briefings: the questions to ask before approving AI capital",
      "Executive AI literacy — what these systems actually do, without the mystique",
      "Investment decision workshops built on the Grounded framework",
      "Governance design sessions: from principles to enforceable authority",
    ],
  },
  {
    icon: UserGroupIcon,
    title: "Workshops & Masterclasses",
    description:
      "Half-day to multi-day working sessions built around your live AI decisions — a real investment on the table, a real governance gap to close — rather than generic case studies.",
    topics: [
      "AI readiness deep-dive against the ten Grounded blocks",
      "Authority mapping: what each AI system in your estate is permitted to do",
      "Pilot-to-production gates and reliability thresholds",
      "Faculty-grade teaching honed as visiting faculty and Stanford LEAD alumnus",
    ],
  },
];

export default function SpeakingPage() {
  return (
    <Container>
      <SectionTitle
        preTitle="Speaking & Programs"
        title="Give Your Leadership a Clear Mental Model for AI"
      >
        Boards are handed hype from one side and fear from the other. These
        keynotes and programs replace both with judgment — grounded in 26 years
        of enterprise technology and frameworks you can test.
      </SectionTitle>

      <Container>
        <div className="space-y-12 max-w-4xl mx-auto">
          {formats.map((f) => (
            <div
              key={f.title}
              className="p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-tuvis-teal to-minds-navy rounded-xl shadow-lg">
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {f.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {f.description}
              </p>
              <ul className="space-y-3">
                {f.topics.map((t, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-tuvis-teal dark:text-tuvis-cyan" />
                    <span className="text-gray-600 dark:text-gray-400">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center">
            <Link
              href="/contact/"
              className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-tuvis-teal to-minds-navy rounded-md hover:from-tuvis-cyan hover:to-tuvis-teal transition-all duration-300"
            >
              Invite Us to Speak
            </Link>
          </div>
        </div>
      </Container>

      <Cta />
    </Container>
  );
}

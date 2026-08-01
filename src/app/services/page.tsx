import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";
import {
  MapIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  PresentationChartLineIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Services — TuvisMinds | AI Strategy, Governance & Execution",
  description:
    "AI readiness assessments, AI governance design, strategy execution and leadership programs for enterprises deciding on AI investments.",
};

const services = [
  {
    id: "strategy",
    icon: MapIcon,
    kicker: "Decide",
    title: "AI Strategy & Investment Decisions",
    intro:
      "Most failed AI initiatives were doomed before the first line of code — the organization simply wasn't ready for the investment in front of it. We test that readiness before capital is committed.",
    points: [
      "Grounded readiness assessment — ten diagnostic blocks, three non-negotiable gates, and a verdict rather than a score",
      "AI portfolio prioritization: which use cases carry real business value, and in what order",
      "Build / buy / partner decisions and platform strategy grounded in your actual constraints",
      "Business cases your CFO can defend — costs, risks and value stated honestly",
    ],
  },
  {
    id: "governance",
    icon: ShieldCheckIcon,
    kicker: "Govern",
    title: "AI Governance by Design",
    intro:
      "Your company knows exactly who is allowed to approve a £2m payment. It has no equivalent answer for the AI agent that just raised one. We design that answer — structurally, before AI acts.",
    points: [
      "The Operational Authority Layer: define what each AI system is permitted to do before an action commits",
      "Governance operating model — decision rights, escalation paths, and accountability that names people",
      "Policy-to-enforcement mapping so governance lives in systems, not binders",
      "Regulatory alignment (EU AI Act and sector regimes) approached as architecture, not paperwork",
    ],
  },
  {
    id: "execution",
    icon: RocketLaunchIcon,
    kicker: "Execute",
    title: "Execution & Implementation",
    intro:
      "A strategy that stops at a slide deck is theatre. We stay engaged through delivery, bringing 26 years of enterprise technology delivery to bear on the messy middle of AI adoption.",
    points: [
      "Operating model and team design for AI delivery — who builds, who runs, who is accountable",
      "Vendor and platform selection, negotiation support and architecture review",
      "Pilot-to-production discipline: exit criteria, reliability thresholds and scaling decisions",
      "Change management and capability building so adoption outlasts the consultants",
    ],
  },
  {
    id: "leadership",
    icon: PresentationChartLineIcon,
    kicker: "Equip",
    title: "Keynotes & Leadership Programs",
    intro:
      "AI decisions are being made in boardrooms by leaders who are handed hype from one side and fear from the other. We give leadership teams a clear, evidence-based mental model instead.",
    points: [
      "Keynote speeches on AI strategy, governance and the physics of autonomous decisions",
      "Executive and board programs: from AI literacy to investment decision frameworks",
      "Leadership workshops built around your live AI decisions, not generic case studies",
      "See the Speaking page for formats and topics",
    ],
    link: { href: "/speaking/", label: "Explore Speaking & Programs" },
  },
];

export default function ServicesPage() {
  return (
    <Container>
      <SectionTitle preTitle="Services" title="From AI Decision to AI Delivery">
        We work across the full arc of enterprise AI adoption: deciding where
        to invest, designing the governance, executing the strategy, and
        equipping leadership to steer it.
      </SectionTitle>

      <Container>
        <div className="space-y-12 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="relative p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-tuvis-teal to-minds-navy rounded-xl shadow-lg">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-tuvis-leaf">
                    {s.kicker}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {s.title}
                  </h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {s.intro}
              </p>
              <ul className="space-y-3">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-tuvis-teal dark:text-tuvis-cyan" />
                    <span className="text-gray-600 dark:text-gray-400">{p}</span>
                  </li>
                ))}
              </ul>
              {s.link && (
                <Link
                  href={s.link.href}
                  className="inline-block mt-6 font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline"
                >
                  {s.link.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>

      <Cta />
    </Container>
  );
}

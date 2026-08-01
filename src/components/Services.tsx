import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import {
  MapIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  PresentationChartLineIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    name: "AI Strategy & Investment Decisions",
    icon: <MapIcon />,
    description:
      "Which AI investments are worth making — and which are expensive theatre? We test readiness before capital is committed, using the Grounded framework's ten blocks and three non-negotiable gates.",
    href: "/services/",
  },
  {
    name: "AI Governance by Design",
    icon: <ShieldCheckIcon />,
    description:
      "Governance that defines what an AI system is permitted to do before it acts — the Operational Authority Layer — instead of reconstructing accountability from audit logs after something goes wrong.",
    href: "/services/",
  },
  {
    name: "Execution & Implementation",
    icon: <RocketLaunchIcon />,
    description:
      "Strategy that survives contact with reality: operating models, vendor and platform choices, pilot-to-production discipline, and the organizational change that makes AI stick.",
    href: "/services/",
  },
  {
    name: "Keynotes & Leadership Programs",
    icon: <PresentationChartLineIcon />,
    description:
      "Keynote speeches and structured AI programs that give boards and leadership teams a clear, hype-free mental model for deciding, governing and scaling AI.",
    href: "/speaking/",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="text-center mb-16">
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase dark:text-tuvis-leaf">
            What We Do
          </div>
          <h2 className="max-w-2xl mx-auto mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            From AI Decision to AI Delivery
          </h2>
          <p className="max-w-2xl mx-auto py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            We work with enterprises across the full arc of AI adoption —
            deciding where to invest, designing the governance, executing the
            strategy, and equipping leadership to steer it.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-gradient-to-br from-tuvis-teal to-minds-navy rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(service.icon, { className: "w-7 h-7 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {service.name}
              </h3>
              <p className="flex-grow text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline"
              >
                Learn more
                <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

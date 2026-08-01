import React from "react";
import { Container } from "@/components/Container";
import {
  GiftIcon,
  ShieldCheckIcon,
  MicrophoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export const Brands = () => {
  const ventures = [
    {
      name: "Saavi",
      badge: "Sustainable Commerce",
      tagline: "Sustainable Gifts, Empowered Communities",
      description:
        "Saavi curates handcrafted, eco-friendly gifts made by rural artisans and women craftspeople across India — wooden diyas, Madhubani art, textiles, pottery and home décor. Corporate gifting that looks elegant, tells a story, and sustains 200+ artisan livelihoods.",
      url: "https://saavi.tuvisminds.com/",
      cta: "Visit Saavi",
      icon: <GiftIcon />,
      gradient: "from-tuvis-green to-tuvis-teal",
      hoverGradient: "hover:from-tuvis-teal hover:to-minds-navy",
      features: [
        "Handcrafted by 200+ rural artisans and women craftspeople",
        "Sustainable materials — wood, soya wax, jute",
        "Corporate gifting & personalized curation, delivered pan-India",
      ],
    },
    {
      name: "Shrini — AI & Governance",
      badge: "Enterprise AI",
      tagline: "Enterprise AI · Governance · Transformation",
      description:
        "The research and advisory practice of Shrinivas Kulkarni — 26 years in enterprise technology, Stanford LEAD alumnus and visiting faculty. Home of the Grounded readiness framework and the Operational Authority Layer: governance designed before AI acts, not audited after.",
      url: "https://shrini.tuvisminds.com/",
      cta: "Read the Work",
      icon: <ShieldCheckIcon />,
      gradient: "from-tuvis-teal to-minds-navy",
      hoverGradient: "hover:from-tuvis-cyan hover:to-tuvis-teal",
      features: [
        "Grounded — a 10-block diagnostic for AI investment readiness",
        "The Operational Authority Layer for structural AI control",
        "Essays on autonomy, reliability and enterprise transformation",
      ],
    },
  ];

  return (
    <section id="ventures" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="text-center mb-16">
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase dark:text-tuvis-leaf">
            Our Ventures
          </div>
          <h2 className="max-w-2xl mx-auto mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Two Fronts, One Standard of Care
          </h2>
          <p className="max-w-2xl mx-auto py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            Under the TuvisMinds umbrella, we grow a commerce venture rooted in
            sustainability and a governance practice shaping how enterprises
            adopt AI responsibly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${venture.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${venture.gradient} rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300`}></div>
              <div className={`absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br ${venture.gradient} rounded-full opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-300`}></div>

              <div className="relative p-8 lg:p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${venture.gradient} rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {React.cloneElement(venture.icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase text-indigo-600 bg-indigo-100 rounded-full dark:text-tuvis-leaf dark:bg-tuvis-cyan/10">
                    {venture.badge}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {venture.name}
                </h3>

                <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
                  {venture.tagline}
                </p>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {venture.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {venture.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-gradient-to-br ${venture.gradient} rounded-full`}></div>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 text-white font-medium bg-gradient-to-r ${venture.gradient} rounded-lg ${venture.hoverGradient} transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105`}
                >
                  <span>{venture.cta}</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Also in the family */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-minds-navy to-tuvis-teal rounded-xl">
              <MicrophoneIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                Speakeasy <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Incubated</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                A hands-on platform helping introverts and shy students speak with confidence. Beta completed successfully.
              </p>
            </div>
            <a
              href="http://speakeasy.tuvisminds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-tuvis-leaf hover:underline"
            >
              Visit <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

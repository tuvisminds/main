import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  const navigation = [
    { name: "Ventures", href: "#ventures" },
    { name: "AI & Governance", href: "#ai-governance" },
    { name: "Principles", href: "#principles" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];
  const ventures = [
    { name: "Saavi — Sustainable Gifting", href: "https://saavi.tuvisminds.com/" },
    { name: "Shrini — AI & Governance", href: "https://shrini.tuvisminds.com/" },
    { name: "Speakeasy", href: "http://speakeasy.tuvisminds.com/" },
  ];
  return (
    <div className="relative border-t border-gray-100 dark:border-trueGray-800">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" aria-label="TuvisMinds home">
                <Logo withTagline />
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              TuvisMinds builds purposeful ventures and rigorous thinking on
              enterprise AI. Saavi brings sustainable artisan gifting to
              corporates across India; our governance practice asks what AI
              systems should be permitted to do — before they act.
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200 px-4 mb-2">Explore</div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-tuvis-teal focus:text-tuvis-teal focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="text-sm font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200 px-4 mb-2">Our Ventures</div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {ventures.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-tuvis-teal focus:text-tuvis-teal focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} TuvisMinds. Purposeful Ventures. Accountable AI.
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div id="contact" className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gradient-to-br from-minds-navy to-minds-ink px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl shadow-2xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Deciding on an AI Investment? Talk to Us First.
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            A readiness assessment, a governance design, a keynote for your
            leadership team — the first conversation is free and to the point.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/contact/"
            className="inline-block py-3 mx-auto w-full sm:w-auto text-lg font-medium text-center text-minds-navy bg-white rounded-md px-7 lg:px-10 hover:bg-tuvis-cyan hover:text-white transition-all duration-300 shadow-lg"
          >
            Book a Conversation
          </Link>
          <a
            href="mailto:kshrinivas.lead@gmail.com"
            className="inline-block py-3 mx-auto w-full sm:w-auto text-lg font-medium text-center text-white border border-white/40 rounded-md px-7 lg:px-10 hover:bg-white/10 transition-all duration-300"
          >
            Email Us
          </a>
        </div>
      </div>
    </Container>
  );
};

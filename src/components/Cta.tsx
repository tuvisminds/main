import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div id="contact" className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gradient-to-br from-minds-navy to-minds-ink px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl shadow-2xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Let&apos;s Build Something Accountable
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Corporate gifting with Saavi, or a conversation about AI readiness
            and governance — use the chat bubble below and we&apos;ll reply by email.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://saavi.tuvisminds.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-minds-navy bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-tuvis-cyan hover:text-white transition-all duration-300 shadow-lg"
          >
            Explore Saavi
          </a>
        </div>
      </div>
    </Container>
  );
};

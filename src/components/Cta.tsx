import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gradient-to-br from-[#2bb9c7] to-[#1a2842] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl shadow-2xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to Embrace Growth Mindset?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Start your journey towards continuous learning and innovation today.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#contact"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#1a2842] bg-[#96d712] rounded-md px-7 lg:px-10 lg:py-5 hover:bg-white hover:text-[#2bb9c7] transition-all duration-300 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </Container>
  );
};

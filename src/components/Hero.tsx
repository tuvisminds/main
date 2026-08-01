import Link from "next/link";
import { Container } from "@/components/Container";
import { HeroVisual } from "@/components/HeroVisual";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 bg-indigo-100 rounded-full dark:text-tuvis-cyan dark:bg-tuvis-cyan/10">
              AI Strategy · Governance · Execution
            </span>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Decide, Govern and Execute{" "}
              <span className="text-tuvis-teal dark:text-tuvis-cyan">
                AI with Confidence
              </span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              TuvisMinds helps enterprises decide which AI investments are worth
              making, design the governance that keeps AI accountable, and
              execute the strategy end to end — grounded in 26 years of
              enterprise technology, not the AI news cycle.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/contact/"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-gradient-to-r from-tuvis-teal to-minds-navy rounded-md hover:from-tuvis-cyan hover:to-tuvis-teal transition-all duration-300">
                Book a Conversation
              </Link>
              <Link
                href="/services/"
                className="flex items-center space-x-2 px-4 py-4 text-lg font-medium text-indigo-600 dark:text-tuvis-cyan hover:text-minds-navy dark:hover:text-tuvis-leaf transition-colors">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Services</title>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <HeroVisual />
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            One conviction:{" "}
            <span className="text-tuvis-teal dark:text-tuvis-cyan font-semibold">
              AI should act only with real-world accountability
            </span>{" "}
            — and the strategy behind it should survive contact with reality.
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12 md:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-bold text-tuvis-teal dark:text-tuvis-cyan">26 yrs</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Enterprise technology experience behind our advice</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tuvis-teal dark:text-tuvis-cyan">10</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Diagnostic blocks in the Grounded AI-readiness framework</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tuvis-teal dark:text-tuvis-cyan">3</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Non-negotiable gates before AI capital is committed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tuvis-teal dark:text-tuvis-cyan">Stanford</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">LEAD alumnus, visiting faculty and Business Head for AI</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

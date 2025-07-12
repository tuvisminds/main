import Image from "next/image";
import { Container } from "@/components/Container";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Nurturing Growth Through Innovation
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              TuvisMinds is an umbrella company dedicated to fostering growth mindset across diverse ventures. 
              We believe in continuous learning, resilience, and the power of embracing challenges as opportunities.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#brands"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-gradient-to-r from-[#2bb9c7] to-[#1a2842] rounded-md hover:from-[#96d712] hover:to-[#2bb9c7] transition-all duration-300">
                Explore Our Brands
              </a>
              <a
                href="#growth-mindset"
                className="flex items-center space-x-2 text-[#2bb9c7] dark:text-[#96d712] hover:text-[#96d712] dark:hover:text-[#2bb9c7] transition-colors">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Growth</title>
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
                <span> Learn About Growth</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#96d712] via-[#2bb9c7] to-[#1a2842] opacity-20 rounded-2xl"></div>
            <Image
              src="/img/2148861696.jpg"
              width="616"
              height="617"
              className={"object-cover rounded-2xl shadow-2xl"}
              alt="Growth and Innovation Illustration"
              loading="eager"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#96d712] to-[#2bb9c7] rounded-full opacity-80 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#2bb9c7] to-[#1a2842] rounded-full opacity-60 blur-lg"></div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Empowering growth across <span className="text-[#96d712] font-semibold">multiple</span>{" "}
            industries and ventures
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <div className="text-lg font-semibold">Saavi</div>
              <div className="text-sm">Coming Soon</div>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <div className="text-lg font-semibold">Innovation</div>
              <div className="text-sm">Technology</div>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <div className="text-lg font-semibold">Learning</div>
              <div className="text-sm">Education</div>
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <div className="text-lg font-semibold">Growth</div>
              <div className="text-sm">Mindset</div>
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <div className="text-lg font-semibold">Future</div>
              <div className="text-sm">Ventures</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}



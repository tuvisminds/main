import React from "react";
import { Container } from "@/components/Container";
import { 
  MicrophoneIcon, 
  GiftIcon,
  ArrowRightIcon 
} from "@heroicons/react/24/solid";

export const Brands = () => {
  const brands = [
    {
      name: "Speakeasy",
      tagline: "Overcome the fear of public speaking",
      description: "A practical platform designed to help introverts and shy students speak confidently. Speakeasy brings a hands-on approach to public speaking, making learning addictive and accessible.",
      url: "http://speakeasy.tuvisminds.com/",
      icon: <MicrophoneIcon />,
      gradient: "from-[#2bb9c7] to-[#1a2842]",
      hoverGradient: "hover:from-[#96d712] hover:to-[#2bb9c7]",
      features: [
        "Practical public speaking training",
        "Designed for introverts and shy students",
        "Beta phase completed successfully"
      ]
    },
    {
      name: "Saavi",
      tagline: "Sustainable corporate gifting",
      description: "An environment-driven corporate gifting business specializing in elegant wooden crafted gifts. Saavi ensures sustainable products look elegant enough for corporates.",
      url: "https://saavi.tuvisminds.com/",
      icon: <GiftIcon />,
      gradient: "from-[#96d712] to-[#2bb9c7]",
      hoverGradient: "hover:from-[#2bb9c7] hover:to-[#1a2842]",
      features: [
        "Wooden crafted gifts",
        "Environment-driven approach",
        "Elegant corporate solutions"
      ]
    }
  ];

  return (
    <section id="brands" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="text-center mb-16">
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase dark:text-[#96d712]">
            Our Brands
          </div>
          <h2 className="max-w-2xl mx-auto mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Empowering Growth Through Innovation
          </h2>
          <p className="max-w-2xl mx-auto py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            Under the TuvisMinds umbrella, we nurture brands that embody growth principles and create meaningful impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Decorative elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${brand.gradient} rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300`}></div>
              <div className={`absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br ${brand.gradient} rounded-full opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-300`}></div>

              <div className="relative p-8 lg:p-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${brand.gradient} rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(brand.icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>

                {/* Brand Name */}
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {brand.name}
                </h3>

                {/* Tagline */}
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
                  {brand.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {brand.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {brand.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-gradient-to-br ${brand.gradient} rounded-full`}></div>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 text-white font-medium bg-gradient-to-r ${brand.gradient} rounded-lg ${brand.hoverGradient} transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105`}
                >
                  <span>Visit {brand.name}</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#96d712] to-[#2bb9c7] bg-opacity-10 dark:bg-opacity-20 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              <span className="text-[#2bb9c7] dark:text-[#96d712] font-bold">TuvisMinds</span> - Cultivating growth mindset across diverse ventures
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};


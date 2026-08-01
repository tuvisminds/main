import React from "react";
import { Container }  from "@/components/Container";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    kicker: string;
    desc: string;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <BenefitPanel kicker={data.kicker} bullets={data.bullets} />
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
  );
};

/* A composed panel of the section's own icons — replaces stock imagery. */
function BenefitPanel({
  kicker,
  bullets,
}: {
  kicker: string;
  bullets: { title: string; icon: React.ReactNode }[];
}) {
  const offsets = ["lg:translate-x-0", "lg:translate-x-8", "lg:translate-x-16"];
  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-minds-ink to-[#1d3252] p-8 lg:p-10 shadow-2xl">
      {/* quiet concentric arcs */}
      <svg
        className="absolute -top-16 -right-16 w-64 h-64 opacity-20"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="50" stroke="#2bb9c7" />
        <circle cx="100" cy="100" r="75" stroke="#2bb9c7" strokeOpacity="0.6" />
        <circle cx="100" cy="100" r="98" stroke="#2bb9c7" strokeOpacity="0.3" />
      </svg>

      <div className="relative text-xs font-semibold tracking-[0.2em] uppercase text-tuvis-cyan mb-8">
        {kicker}
      </div>

      <div className="relative flex flex-col gap-4">
        {bullets.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 px-5 py-4 backdrop-blur-sm transform ${offsets[index % offsets.length]}`}
          >
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-tuvis-teal to-tuvis-cyan">
              {React.cloneElement(item.icon as React.ReactElement, {
                className: "w-5 h-5 text-white",
              })}
            </div>
            <span className="text-white font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Benefit(props: any) {
  return (
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-gradient-to-br from-tuvis-teal to-minds-navy rounded-md w-11 h-11 shadow-lg">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-white",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
  );
}

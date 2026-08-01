import {
  LightBulbIcon,
  GlobeAsiaAustraliaIcon,
  HandRaisedIcon,
  ScaleIcon,
  ShieldCheckIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
const benefitOne = {
  title: "Impact by Design",
  kicker: "Saavi · Sustainable Commerce",
  desc: "Saavi proves that commerce can regenerate rather than extract. Every product decision — material, maker, packaging — is made with communities and the environment in the room.",
  bullets: [
    {
      title: "Artisan-First Sourcing",
      desc: "200+ rural artisans and women craftspeople earn sustainable livelihoods through fair, direct partnerships.",
      icon: <HandRaisedIcon />,
    },
    {
      title: "Sustainable Materials",
      desc: "Wood, soya wax, jute and natural craft traditions replace plastic and disposability.",
      icon: <GlobeAsiaAustraliaIcon />,
    },
    {
      title: "Craft Meets Corporate",
      desc: "Traditional Indian craftsmanship, curated to the standard corporate gifting demands.",
      icon: <LightBulbIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Accountability by Architecture",
  kicker: "AI · Governance",
  desc: "Our AI governance work starts from a simple premise: responsibility for consequences must be designed into systems structurally — not reconstructed from logs after something goes wrong.",
  bullets: [
    {
      title: "Authority Before Action",
      desc: "Define what an AI system is permitted to do before it acts — the Operational Authority Layer.",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Readiness Before Investment",
      desc: "The Grounded framework tests organizational readiness across ten blocks and three non-negotiable gates.",
      icon: <ScaleIcon />,
    },
    {
      title: "Evidence Over Hype",
      desc: "Positions grounded in 26 years of enterprise technology, not in the AI news cycle.",
      icon: <CpuChipIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

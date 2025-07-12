import {
  LightBulbIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { getImagePath } from "@/utils/path";

// Static image paths for export build
const benefitOneImg = getImagePath("/img/37443113_8536728.jpg");
const benefitTwoImg = getImagePath("/img/37443093_8536753.jpg");

const benefitOne = {
  title: "Fostering Growth Mindset",
  desc: "At TuvisMinds, we believe that growth comes from embracing challenges, learning from failures, and continuously evolving. Our approach nurtures resilience and curiosity.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Embrace Challenges",
      desc: "Transform obstacles into opportunities for learning and growth.",
      icon: <LightBulbIcon />,
    },
    {
      title: "Continuous Learning",
      desc: "Foster a culture of lifelong learning and skill development.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Resilient Innovation",
      desc: "Build resilience through iterative improvement and adaptation.",
      icon: <ArrowTrendingUpIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Empowering Future Ventures",
  desc: "Under the TuvisMinds umbrella, we incubate and nurture brands that embody growth principles. Each venture is designed to create meaningful impact while fostering innovation.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Saavi Brand Development",
      desc: "Our flagship brand focusing on sustainable growth solutions.",
      icon: <SparklesIcon />,
    },
    {
      title: "Innovation Incubation",
      desc: "Supporting breakthrough ideas that drive positive change.",
      icon: <RocketLaunchIcon />,
    },
    {
      title: "Purpose-Driven Growth",
      desc: "Aligning business growth with meaningful social impact.",
      icon: <HeartIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

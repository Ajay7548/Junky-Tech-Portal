import {
  BookHeadphonesIcon,
  Brain,
  ChartArea,
  ChartCandlestickIcon,
  Cloud,
  CodeIcon,
  MessageCircleMoreIcon,
  Palette,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: <CodeIcon className="w-5 h-5 text-blue-500" />,
    course: "Web Development",
    description: "Modern and responsive websites built with the latest technologies.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Performance",
      "Secure Architecture",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: <ChartArea className="w-5 h-5 text-green-500" />,
    course: "Digital Marketing",
    description: "Grow your business with data-driven marketing strategies.",
    features: [
      "SEO",
      "Google Ads",
      "Social Media",
      "Analytics",
    ],
    technologies: ["Google Ads", "Meta", "Analytics", "SEO"],
  },
  {
    icon: <BookHeadphonesIcon className="w-5 h-5 text-blue-500" />,
    course: "IT Consulting",
    description: "Expert guidance for your digital transformation.",
    features: [
      "Planning",
      "Architecture",
      "Strategy",
      "Support",
    ],
    technologies: ["AWS", "Azure", "Docker", "Linux"],
  },
  {
    icon: <Cloud className="w-5 h-5 text-blue-500" />,
    course: "Cloud & Hosting",
    description: "Scalable cloud solutions and reliable hosting services.",
    features: [
      " Cloud Migration",
      "DevOps",
      "Cloud Security",
      "Performance",
      "Auto Scaling",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker"],
  },
  {
    icon: <MessageCircleMoreIcon className="w-5 h-5 text-blue-500" />,
    course: "Chatbot Development",
    description: "Create intelligent chatbots for your business.",
    features: [
      "NLP Integration",
      "Multi-platform",
      "Analytics",
      "Human Handoff"

    ],
    technologies: ["Dialogflow", "Rasa", "Microsoft Bot", "WhatsApp API"],
  },
  {
    icon: <Palette className="w-5 h-5 text-blue-500" />,
    course: "UI/UX Design",
    description: "Create beautiful and user-friendly interfaces.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision"],
  },


  {
    icon: <Shield className="w-5 h-5 text-blue-500" />,
    course: "QA & Testing",
    description: "Ensure the quality and reliability of your software.",
    features: [
      "Test Planning",
      "Test Execution",
      "Bug Tracking",
      "Reporting",
    ],
    technologies: ["Selenium", "Jest", "Cypress", "Postman", "Linux"],
  },

];

import React from "react";
import ServiceComponent from "./ServiceComponent";

const Courses = () => {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceComponent
          key={index}
          {...service}
        />
      ))}
    </div>
  );
};

export default Courses;
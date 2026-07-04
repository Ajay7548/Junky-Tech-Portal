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
  Smartphone,
  Wrench,
} from "lucide-react";

const services = [
  // Development
  {
    icon: <CodeIcon className="w-5 h-5 text-blue-500" />,
    course: "Web Development",
    category: "development",
    description: "Modern and responsive websites built with the latest technologies.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure Architecture"],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: <Cloud className="w-5 h-5 text-blue-500" />,
    course: "Cloud & Hosting",
    category: "development",
    description: "Scalable cloud solutions and reliable hosting services.",
    features: ["Cloud Migration", "DevOps", "Cloud Security", "Performance"],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker"],
  },

  // Business
  {
    icon: <ChartArea className="w-5 h-5 text-green-500" />,
    course: "Digital Marketing",
    category: "business",
    description: "Grow your business with data-driven marketing strategies.",
    features: ["SEO", "Google Ads", "Social Media", "Analytics"],
    technologies: ["Google Ads", "Meta", "Analytics", "SEO"],
  },
  {
    icon: <BookHeadphonesIcon className="w-5 h-5 text-blue-500" />,
    course: "IT Consulting",
    category: "business",
    description: "Expert guidance for your digital transformation.",
    features: ["Planning", "Architecture", "Strategy", "Support"],
    technologies: ["AWS", "Azure", "Docker", "Linux"],
  },

  // AI & Automation
  {
    icon: <MessageCircleMoreIcon className="w-5 h-5 text-blue-500" />,
    course: "Chatbot Development",
    category: "business",
    description: "Create intelligent chatbots for your business.",
    features: ["NLP Integration", "Multi-platform", "Analytics", "Human Handoff"],
    technologies: ["Dialogflow", "Rasa", "Microsoft Bot", "WhatsApp API"],
  },

  // Design & Quality
  {
    icon: <Palette className="w-5 h-5 text-blue-500" />,
    course: "UI/UX Design",
    category: "quality",
    description: "Create beautiful and user-friendly interfaces.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision"],
  },
  {
    icon: <Shield className="w-5 h-5 text-blue-500" />,
    course: "QA & Testing",
    category: "quality",
    description: "Ensure the quality and reliability of your software.",
    features: ["Test Planning", "Test Execution", "Bug Tracking", "Reporting"],
    technologies: ["Selenium", "Jest", "Cypress", "Postman", "Linux"],
  },
  {
    icon: <Smartphone className="w-5 h-5 text-blue-500" />,
    course: "Mobile App Development",
    category: "development",
    description: "Build high-performance Android and iOS applications for your business.",
    features: [
      "Android & iOS",
      "Cross-Platform",
      "Push Notifications",
      "App Store Deployment",
    ],
    technologies: ["React Native", "Flutter", "Kotlin", "Swift"],
  }, {
    icon: <Wrench className="w-5 h-5 text-blue-500" />,
    course: "IT Support",
    category: "business",
    description: "Reliable technical support and infrastructure management to keep your business running smoothly.",
    features: [
      "Remote Support",
      "Network Troubleshooting",
      "System Maintenance",
      "Help Desk",
    ],
    technologies: ["Windows", "Linux", "Active Directory", "Microsoft 365"],
  },
];

import React from "react";
import ServiceComponent from "./ServiceComponent";

const Courses = ({ category }) => {
  return (
    <>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services
          .filter((service) => service.category === category)
          .map((service, index) => (
            <ServiceComponent key={index} {...service} />
          ))}
      </div>
    </>
  );
};

export default Courses;
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const ServiceComponent = ({icon,
  course,
  description,
  features,
  technologies,
}) => {
  return (
<div className="max-w-sm w-full rounded-xl dark:bg-slate-800  bg-white p-6 shadow-md flex flex-col gap-3
                transition-all hover:duration-300
                hover:-translate-y-1
                hover:shadow-blue-200 hover:dark:shadow-blue-900
                hover:shadow-xl">
      <div className="w-fit rounded-xl hover:bg-blue-50 dark:bg-blue-950 shadow-lg hover:animate-pulse hover:shadow-blue-400 p-3.5">
        {icon}
      </div>
                        <h2 className="text-xl dark:text-gray-200 font-semibold text-gray-900">{course}</h2>

      <p className="text-sm text-gray-500">{description}</p>

      <div>
        <h3 className="mb-3 dark:text-gray-300 font-medium text-gray-800">Key Features</h3>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <p className="text-sm text-gray-500">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 dark:text-white font-medium text-gray-800">Technologies</h3>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-md dark:bg-gray-600 dark:text-white bg-gray-200 px-3 py-1 text-sm text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <button className="mt-2 flex dark:text-white items-center justify-center gap-2 rounded-xl hover:bg-blue-500 px-6 py-2 font-semibold  transition duration-300 border-1 hover:text-white dark:border-gray-950 border-gray-200 text-gray-800 ">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ServiceComponent;
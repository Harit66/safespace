import React from "react";

interface CustomStepsProps {
  steps: number;
  currentStep: number;
}

const CustomSteps: React.FC<CustomStepsProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col gap-14 items-center">
      {Array.from({ length: steps }).map((_, index) => (
        <div key={index} className="relative">
          <div
            className={`flex-shrink-0 flex items-center justify-center h-3 w-3 border-2 rounded-full ${
              index < currentStep
                ? "border-green-500 bg-green-500 text-white"
                : "border-gray-300 bg-white text-gray-500"
            }`}
          ></div>
          {index < steps - 1 && (
            <div
              className={`absolute  left-[5px] h-14  w-0.5 ${
                index < currentStep ? " bg-green-500 " : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomSteps;

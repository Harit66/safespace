import React from "react";

type Props = {
  color: string;
  width: number;
  height: number;
  className: string;
};

const OpenEye = ({
  color = "#000000",
  className,
  width = 24,
  height = 24,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={width}
      height={height}
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon eye-open-icon ${className} `}
    >
      <path d="M1,12s4-8,11-8,11,8,11,8-4,8-11,8S1,12,1,12Z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
};

export default OpenEye;
